import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NewsModalState, VisibilityInterface } from './types';

const newsModalInitialState: NewsModalState = { isVisible: false };

export const newsModalSlice = createSlice({
  name: 'newsModal',
  initialState: newsModalInitialState,
  reducers: {
    changeVisibility: (state, action: PayloadAction<VisibilityInterface>) => {
      state.isVisible = action.payload.isOvertly;
    }
  }
});

export const { changeVisibility } = newsModalSlice.actions;
export default newsModalSlice.reducer;
