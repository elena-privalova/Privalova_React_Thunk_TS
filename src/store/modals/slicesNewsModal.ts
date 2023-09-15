import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NewsModalVisibility } from './types';

const newsModalInitialState: NewsModalVisibility = { isNewsVisible: false };

export const newsModalSlice = createSlice({
  name: 'newsModal',
  initialState: newsModalInitialState,
  reducers: {
    changeNewsVisibility: (state, action: PayloadAction<NewsModalVisibility>) => {
      state.isNewsVisible = action.payload.isNewsVisible;
    }
  }
});

export const { changeNewsVisibility } = newsModalSlice.actions;
export default newsModalSlice.reducer;
