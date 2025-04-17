// src/api/endpoints.ts
const BASE_URL = 'https://api.wokpa.app/api/listeners';

export const API_ENDPOINTS = {
  topPodcasts: (page = 1, perPage = 15) => 
    `${BASE_URL}/top-podcasts?page=${page}&per_page=${perPage}`,
  topCategories: () => 
    `${BASE_URL}/top-categories`,
  trendingEpisodes: (page = 1, perPage = 15) => 
    `${BASE_URL}/popular-and-trending-podcasts?page=${page}&per_page=${perPage}`,
  podcastSearch: (query: string, page = 1, perPage = 15) => 
    `${BASE_URL}/podcast-search?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`,
  getPodcast: (id: string | number) => 
    `${BASE_URL}/podcasts/${id}`,
  getPodcastEpisodes: (podcastId: string | number, page = 1, perPage = 15) => 
    `${BASE_URL}/podcasts/${podcastId}/episodes?page=${page}&per_page=${perPage}`,
  getEpisode: (id: string | number) => 
    `${BASE_URL}/episodes/${id}`,
  latestEpisodes: (page = 1, perPage = 15) => 
    `${BASE_URL}/episodes/latest?page=${page}&per_page=${perPage}`,
};