import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NewsModalState, NewsVisibilityState } from './types';

const newsModalInitialState: NewsModalState = { isNewsVisible: false };

export const newsModalSlice = createSlice({
  name: 'newsModal',
  initialState: newsModalInitialState,
  reducers: {
    changeNewsVisibility: (state, action: PayloadAction<NewsVisibilityState>) => {
      state.isNewsVisible = action.payload.isVisible;
    }
  }
});

export const { changeNewsVisibility } = newsModalSlice.actions;
export default newsModalSlice.reducer;
