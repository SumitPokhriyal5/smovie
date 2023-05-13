import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBackgroundImages } from '../typescript/Results';

export interface HomeState {
  url: IBackgroundImages | Record<string , never>;
  genres: object;
}

const initialState: HomeState = {
  url: {},
  genres: {},
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration: (state, action: PayloadAction<IBackgroundImages>) => {
      state.url = action.payload;
    },
    getGenres: (state, action: PayloadAction<object>) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
