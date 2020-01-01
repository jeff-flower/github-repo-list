import React, {useState, useEffect} from 'react';

import {getTopStarredRepos, mockGetTopStarredRepos} from '../githubServices';
import { RepoCard } from './RepoCard';

import './repoList.css'

// TODO: show loading spinner
export const RepoContainer: React.FC<{}> = () => {
  const [repoList, setRepoList] = useState<any[]>([]);
  const [errorLoadingRepos, setErrorLoadingRepos] = useState(false);
  
  // TODO: move to custom hook? may improve ability to test
  // in the future could also create custom hook or use existing hooks library for 
  // making api calls
  useEffect(() => {
    const loadRepos = async () => {
      try {
        const repos = await mockGetTopStarredRepos(false); 
        if (!repos.error) {
          setRepoList(repos.items);
        } else {
          setErrorLoadingRepos(true);
        }
      } catch (e) {
        setErrorLoadingRepos(true);
      }
    }

    loadRepos();
  }, [setRepoList, setErrorLoadingRepos]);

  return (
    <div>
      {!repoList && !errorLoadingRepos && <p>loading...</p>}
      {errorLoadingRepos && <p>error loading repo list</p>}
      {repoList && repoList.map(repo => (
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