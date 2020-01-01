import axios from 'axios';

import {mockRepos} from './mockRepos';

export const getTopStarredRepos = async (): Promise<{items: any[], error: boolean}>=> {
  console.log('calling github');
  try {
    // TODO: if we use more github endpoints, look in to configuring axios instance
    // https://github.com/axios/axios#creating-an-instance
    const response = await axios.get('https://api.github.com/search/repositories', {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      },
      params: {
        q: 'stars:>1000',
        sort: 'stars',
        order: 'desc',
        per_page: 100
      }
    });

    return {items: response.data.items, error: false};
  } catch(e) {
    // TODO: 
    return Promise.resolve({items: [], error: true});
  }
};

// TODO: look into axios.mock?
export const mockGetTopStarredRepos = async (error: boolean): Promise<{items: any[], error: boolean}>=> {
  if (!error) {
    return Promise.resolve({
      items: mockRepos().items,
      error: false
    });
  } else {
    return Promise.resolve({
      items: [],
      error: true
    })
  }
};