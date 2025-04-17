// src/redux/features/podcasts/podcastsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Podcast, Episode } from '@/types';

interface PodcastsState {
  topPodcasts: Podcast[];
  trendingEpisodes: Episode[];
  selectedPodcast: Podcast | null;
  selectedEpisode: Episode | null;
  loading: boolean;
  error: string | null;
}

const initialState: PodcastsState = {
  topPodcasts: [],
  trendingEpisodes: [],
  selectedPodcast: null,
  selectedEpisode: null,
  loading: false,
  error: null,
};

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    setTopPodcasts: (state, action: PayloadAction<Podcast[]>) => {
      state.topPodcasts = action.payload;
    },
    setTrendingEpisodes: (state, action: PayloadAction<Episode[]>) => {
      state.trendingEpisodes = action.payload;
    },
    setSelectedPodcast: (state, action: PayloadAction<Podcast>) => {
      state.selectedPodcast = action.payload;
    },
    setSelectedEpisode: (state, action: PayloadAction<Episode>) => {
      state.selectedEpisode = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTopPodcasts,
  setTrendingEpisodes,
  setSelectedPodcast,
  setSelectedEpisode,
  setLoading,
  setError,
} = podcastsSlice.actions;

export default podcastsSlice.reducer;