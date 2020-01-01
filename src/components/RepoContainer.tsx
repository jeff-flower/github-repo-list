import React from 'react';

import {mockRepos} from './mockRepos';
import { RepoCard } from './RepoCard';

import './repoList.css'

// TODO: show loading spinner
export const RepoContainer: React.FC<{}> = () => {
  return (
    <div>
      {mockRepos().items.map(repo => (
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