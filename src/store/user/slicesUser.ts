import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { changeNewsVisibility } from '../modals/slicesNewsModal';
import { NewsModalVisibility } from '../modals/types';
import { VerifyUser } from '../auth/types';
import { addNews, editNews } from '../news';

import { UserState } from './types';
import {
  getUser,
  getUsersPosts,
  refreshUser
} from './thunks';

const userInitialState: UserState = {
  isUserLoading: false,
  currentUser: null,
  currentUserPost: null,
  usersPosts: [],
  userError: '',
  isSuccessUserNews: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    clearUser: state => {
      state.isUserLoading = false;
      state.userError = '';
      state.isSuccessUserNews = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.isUserLoading = true;
        state.userError = '';
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.isUserLoading = false;
        if (typeof action.payload === 'string') state.userError = action.payload;
        else {
          state.currentUser = action.payload as VerifyUser;
          state.userError = '';
        }
      })

      .addCase(getUser.rejected, (state, action) => {
        state.isUserLoading = false;
        if (typeof action.error.message === 'string') state.userError = action.error.message;
      })

      .addCase(getUsersPosts.pending, (state) => {
        state.isUserLoading = true;
        state.userError = '';
        state.isSuccessUserNews = false;
      })

      .addCase(getUsersPosts.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.isSuccessUserNews = false;
        if (typeof action.payload === 'string') state.userError = action.payload;
        else if (Array.isArray(action.payload)) {
          state.usersPosts = action.payload;
          state.userError = '';
        }
      })

      .addCase(refreshUser.pending, state => {
        state.isUserLoading = true;
        state.userError = '';
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isUserLoading = false;
        if (typeof action.payload === 'string') {
          state.userError = action.payload;
        }
        else {
          state.currentUser = action.payload as VerifyUser;
          state.userError = '';
        }
      })

      .addCase(refreshUser.rejected, (state, action) => {
        state.isUserLoading = false;
        if (typeof action.error.message === 'string') state.userError = action.error.message;
      })

      .addCase(changeNewsVisibility, (state, action: PayloadAction<NewsModalVisibility>) => {
        if ('newsId' in action.payload) {
          const findPost = state.usersPosts.find(element => element.id === action.payload.newsId);
          if (findPost != null) {
            state.currentUserPost = findPost;
          }
        }
      })

      .addCase(addNews.fulfilled, (state) => {
        state.isSuccessUserNews = true;
      })

      .addCase(editNews.fulfilled, (state) => {
        state.isSuccessUserNews = true;
      });
  }
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;

