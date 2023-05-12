import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBackgroundImages } from '../typescript/Results'

export interface HomeState {
  url: IBackgroundImages | object,
  genres: object
}

const initialState: HomeState = {
  url: {},
  genres: {}
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration: (state , action: PayloadAction<object>) =>{
        state.url = action.payload
    },
    getGenres: (state , action: PayloadAction<object>) => {
        state.genres = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration , getGenres } = homeSlice.actions

export default homeSlice.reducer