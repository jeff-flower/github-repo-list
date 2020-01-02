import axios from 'axios';

import {mockRepos} from './mockRepos';

export const getTopStarredRepos = async (): Promise<{items: any[], error: boolean}>=> {
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
    // TODO: what if there are no items?
    return {items: response.data.items, error: false};
  } catch(e) {
    // TODO: better error message? 
    return Promise.resolve({items: [], error: true});
  }
};

// helper function for manual testing
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