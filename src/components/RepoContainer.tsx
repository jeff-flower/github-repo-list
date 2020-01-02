import React, {useState, useEffect} from 'react';

import {getTopStarredRepos, mockGetTopStarredRepos} from '../githubServices';
import { RepoCard } from './RepoCard';

// TODO: show loading spinner
export const RepoContainer: React.FC<{}> = () => {
  const [apiState, setApiState] = useState<{repos: any[], loading: boolean, error: boolean}>({
    repos: [],
    loading: false,
    error: false
  });
  
  // TODO: move to custom hook?
  // in the future could also create custom hook or use existing hooks library for 
  // making api calls
  useEffect(() => {
    const loadRepos = async () => {
      try {
        setApiState({repos: [], loading: true, error: false});
        const repos = await getTopStarredRepos(); 
        if (!repos.error) {
          setApiState({repos: repos.items, loading: false, error: false});
        } else {
          setApiState({repos: [], loading: false, error: true});
        }
      } catch (e) {
        setApiState({repos: [], loading: false, error: true});
      }
    }

    loadRepos();
  }, [setApiState]);

  return (
    <div>
      {apiState.loading && <p>loading...</p>}
      {apiState.error && <p>error loading repo list</p>}
      {!apiState.loading && apiState.repos && apiState.repos.map(repo => (
        <RepoCard
          key={repo.name}
          url={repo.html_url}
          name={repo.name}
          stars={repo.stargazers_count}
        />
      ))}
    </div>
  ); 
};