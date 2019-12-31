import React from 'react';

interface RepoCardProps {
  url: string;
  name: string;
  stars: number;
}

export const RepoCard: React.FC<RepoCardProps> = ({url, name, stars}) => {
  return (
    <div>
      <a href={url}>{name}</a>
      <span>{`Stars ${stars}`}</span>
    </div>
  );
};