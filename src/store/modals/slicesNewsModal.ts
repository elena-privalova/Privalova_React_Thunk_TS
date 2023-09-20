import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { addNews, editNews } from '../news';

import { NewsModalVisibility } from './types';

const newsModalInitialState: NewsModalVisibility = {
  isNewsVisible: false,
  kind: 'add'
};

export const newsModalSlice = createSlice({
  name: 'newsModal',
  initialState: newsModalInitialState,
  reducers: {
    changeNewsVisibility: (state, action: PayloadAction<NewsModalVisibility>) => {
      state.isNewsVisible = action.payload.isNewsVisible;
      state.kind = action.payload.kind;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addNews.fulfilled, state => {
        state.isNewsVisible = false;
      })

      .addCase(editNews.fulfilled, state => {
        state.isNewsVisible = false;
      });
  }
});

export const { changeNewsVisibility } = newsModalSlice.actions;
export default newsModalSlice.reducer;
