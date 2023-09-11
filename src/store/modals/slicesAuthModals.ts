import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthModalState, OpenessInterface } from './types';

const authModalsInitialState: AuthModalState = {
  isOpen: false,
  currentType: 'login'
};

export const authModalsSlice = createSlice({
  name: 'authModals',
  initialState: authModalsInitialState,
  reducers: {
    changeOpeness: (state, action: PayloadAction<OpenessInterface>) => {
      state.isOpen = action.payload.isOvertly;
      state.currentType = action.payload.kind;
    }
  }
});

export const { changeOpeness } = authModalsSlice.actions;
export default authModalsSlice.reducer;

