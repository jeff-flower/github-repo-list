import React from 'react';
import {render, waitForElement} from '@testing-library/react';
import axios from 'axios';

import {RepoContainer} from './RepoContainer';
import {mockRepos} from '../mockRepos';

// TODO: set up manual mocks if mocking axios gets out control
jest.mock('axios');

it('shows a loading notification', async () => {
  // @ts-ignore
  axios.get.mockResolvedValue({data: {items: [], error: false}});
  const {getByText} = render(<RepoContainer />);
  await waitForElement(() => getByText('loading', {exact: false}));
});

it('shows an error notification', async () => {
  // @ts-ignore
  axios.get.mockImplementation(() => Promise.reject());
  const {getByText} = render(<RepoContainer />);
  await waitForElement(() => getByText('error', {exact: false}));
});

it('displays the results', async () => {
  const mockItems = mockRepos().items;
  // @ts-ignore
  axios.get.mockResolvedValue({data: {items: mockItems, error: false}});
  const {getAllByTestId} = render(<RepoContainer />);

  const repoCards = await waitForElement(() => getAllByTestId('repoCard'));
  expect(repoCards.length).toBe(mockItems.length);
});