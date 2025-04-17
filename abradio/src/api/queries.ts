// src/api/queries.ts
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './endpoints';

// Fetch top podcasts
export const useTopPodcasts = (page = 1, perPage = 15) => {
  return useQuery({
    queryKey: ['topPodcasts', page, perPage],
    queryFn: async () => {
      const response = await axios.get(API_ENDPOINTS.topPodcasts(page, perPage));
      return response.data;
    }
  });
};

// Fetch top categories
export const useTopCategories = () => {
  return useQuery({
    queryKey: ['topCategories'],
    queryFn: async () => {
      const response = await axios.get(API_ENDPOINTS.topCategories());
      return response.data;
    }
  });
};

// Fetch trending episodes
export const useTrendingEpisodes = (page = 1, perPage = 15) => {
  return useQuery({
    queryKey: ['trendingEpisodes', page, perPage],
    queryFn: async () => {
      const response = await axios.get(API_ENDPOINTS.trendingEpisodes(page, perPage));
      return response.data;
    }
  });
};

// Search podcasts
export const usePodcastSearch = (query: string, page = 1, perPage = 15) => {
  return useQuery({
    queryKey: ['podcastSearch', query, page, perPage],
    queryFn: async () => {
      const response = await axios.get(API_ENDPOINTS.podcastSearch(query, page, perPage));
      return response.data;
    },
    enabled: !!query, // Only run if query exists
  });
};

// Fetch podcast details
export const usePodcast = (id: string | number) => {
  return useQuery({
    queryKey: ['podcast', id],
    queryFn: async () => {
      const response = await axios.get(API_ENDPOINTS.getPodcast(id));
      return response.data;
    },
    enabled: !!id, // Only run if id exists
  });
};

// Fetch podcast episodes
export const usePodcastEpisodes = (podcastId: string | number, page = 1, perPage = 15) => {
  return useQuery({
    queryKey: ['podcastEpisodes', podcastId, page, perPage],
    queryFn: async () => {
      const response = await axios.get(API_ENDPOINTS.getPodcastEpisodes(podcastId, page, perPage));
      return response.data;
    },
    enabled: !!podcastId, // Only run if podcast id exists
  });
};

// Fetch episode details
export const useEpisode = (id: string | number) => {
  return useQuery({
    queryKey: ['episode', id],
    queryFn: async () => {
      const response = await axios.get(API_ENDPOINTS.getEpisode(id));
      return response.data;
    },
    enabled: !!id, // Only run if id exists
  });
};

// Fetch latest episodes
export const useLatestEpisodes = (page = 1, perPage = 15) => {
  return useQuery({
    queryKey: ['latestEpisodes', page, perPage],
    queryFn: async () => {
      const response = await axios.get(API_ENDPOINTS.latestEpisodes(page, perPage));
      return response.data;
    }
  });
};