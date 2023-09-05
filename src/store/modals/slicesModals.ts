import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const modalsInitialState: ModalState = {
  isOpen: false,
  currentType: ''
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: modalsInitialState,
  reducers: {
    changeVisibility: (state, action: PayloadAction<VisibilityInterface>) => {
      state.isOpen = action.payload.isOvertly;
      state.currentType = action.payload.kind
    },
  }
});

export const { changeVisibility } = modalsSlice.actions;
export default modalsSlice.reducer;