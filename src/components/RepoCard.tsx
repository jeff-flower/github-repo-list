import React from 'react';

interface RepoCardProps {
  url: string;
  name: string;
  stars: number;
}

export const RepoCard: React.FC<RepoCardProps> = ({url, name, stars}) => {
  return (
    <div className="repo-card" data-testid="repoCard">
      <div className="repo_card__header">
        <span>{`Stars: ${stars}`}</span>
      </div>
      <div className="repo-card__content"></div>
      <div className="repo-card__title">
        <a href={url}>{name}</a>
      </div>
    </div>
  );
};