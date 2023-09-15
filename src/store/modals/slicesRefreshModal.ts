import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RefreshUserModalVisibility } from './types';

const refreshModalInitialState: RefreshUserModalVisibility = { isRefreshVisible: false };

export const refreshModalSlice = createSlice({
  name: 'refreshModal',
  initialState: refreshModalInitialState,
  reducers: {
    changeRefreshVisibility: (state, action: PayloadAction<RefreshUserModalVisibility>) => {
      state.isRefreshVisible = action.payload.isRefreshVisible;
    }
  }
});

export const { changeRefreshVisibility } = refreshModalSlice.actions;
export default refreshModalSlice.reducer;
