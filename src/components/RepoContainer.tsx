import React from 'react';

import {mockRepos} from './mockRepos';
import { RepoCard } from './RepoCard';

// TODO: show loading spinner
export const RepoContainer: React.FC<{}> = () => {
  return (
    <div>
      {mockRepos().items.map(repo => (
        <RepoCard
          url={repo.html_url}
          name={repo.name}
          stars={repo.stargazers_count}
        />
      ))}
    </div>
  ); 
};