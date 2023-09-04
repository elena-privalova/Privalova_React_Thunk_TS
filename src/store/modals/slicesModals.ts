import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const modalsInitialState: ModalState = {
  openRegistration: false,
  openAuthorization: false,
  currentType: '',
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: modalsInitialState,
  reducers: {
    changeVisibilityRegistration: (state, action: PayloadAction<boolean>) => {
      state.openRegistration = action.payload;
      state.currentType = 'sign up';
    },
    changeVisibilityAuthorization: (state, action: PayloadAction<boolean>) => {
      state.openAuthorization = action.payload;
      state.currentType = 'log in';
    },
  }
});

export const {
  changeVisibilityRegistration,
  changeVisibilityAuthorization
} = modalsSlice.actions;
export default modalsSlice.reducer;
