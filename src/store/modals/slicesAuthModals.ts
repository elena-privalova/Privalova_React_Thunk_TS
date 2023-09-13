import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthModalState, AuthVisibilityState } from './types';

const authModalsInitialState: AuthModalState = {
  isAuthVisible: false,
  currentType: 'login'
};

export const authModalsSlice = createSlice({
  name: 'authModals',
  initialState: authModalsInitialState,
  reducers: {
    changeAuthVisibility: (state, action: PayloadAction<AuthVisibilityState>) => {
      state.isAuthVisible = action.payload.isVisible;
      state.currentType = action.payload.kind;
    }
  }
});

export const { changeAuthVisibility } = authModalsSlice.actions;
export default authModalsSlice.reducer;

