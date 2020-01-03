import React from 'react';
import {render, waitForElement} from '@testing-library/react';

import {RepoContainer} from './RepoContainer';
import {mockRepos} from '../mockRepos';
import {getTopStarredRepos} from '../githubServices';

jest.mock('../githubServices');

afterEach(() => {
  jest.resetAllMocks();
});

test('loads successfully', async () => {
  const mockItems = mockRepos().items;

  // @ts-ignore
  getTopStarredRepos.mockResolvedValue({items: mockItems, error: false});

  const {getByText, getAllByTestId} = render(<RepoContainer />);

  expect(getTopStarredRepos).toHaveBeenCalledTimes(1);

  // loading spinner should show first
  await getByText('loading', {exact: false});

  // repo cards should show after items load
  const repoCards = await waitForElement(() => getAllByTestId('repoCard'));
  expect(repoCards.length).toBe(mockItems.length);
});

test('handles an error when fetching data', async () => {
  // @ts-ignore
  getTopStarredRepos.mockRejectedValue({items: [], error: true});

  const {getByText} = render(<RepoContainer />);

  expect(getTopStarredRepos).toHaveBeenCalledTimes(1);

  // loading spinner should show first
  await getByText('loading', {exact: false});

  await waitForElement(() => getByText('error', {exact: false}));
});