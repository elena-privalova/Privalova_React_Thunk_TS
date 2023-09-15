import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthModalVisibility } from './types';

const authModalsInitialState: AuthModalVisibility = {
  isAuthVisible: false,
  currentType: 'login'
};

export const authModalsSlice = createSlice({
  name: 'authModals',
  initialState: authModalsInitialState,
  reducers: {
    changeAuthVisibility: (state, action: PayloadAction<AuthModalVisibility>) => {
      state.isAuthVisible = action.payload.isAuthVisible;
      state.currentType = action.payload.currentType;
    }
  }
});

export const { changeAuthVisibility } = authModalsSlice.actions;
export default authModalsSlice.reducer;

