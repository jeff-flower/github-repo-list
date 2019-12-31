import React from 'react';

import {RepoContainer} from './RepoContainer'

import './App.css';

export const App: React.FC = () => {
  return (
    <>
    <header className="app-header">
      Top 100 Github Repos By Stars
    </header>
    <main className="app-main">
      <div className="App">
        <RepoContainer/>
      </div>
    </main>
    </>
  );
}