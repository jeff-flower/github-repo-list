import React from 'react';

import './repoCard.css';

interface RepoCardProps {
  url: string;
  name: string;
  stars: number;
}

export const RepoCard: React.FC<RepoCardProps> = ({url, name, stars}) => {
  // TODO: more expressive elements? accessibiity concerns?
  return (
    <div className="repo-card" data-testid="repoCard">
      <div className="repo_card__header">
        <span>{`Stars: ${stars.toLocaleString()}`}</span>
      </div>
      <div className="repo-card__content"></div>
      <div className="repo-card__title">
        <a href={url} target="blank">{name}</a>
      </div>
    </div>
  );
};