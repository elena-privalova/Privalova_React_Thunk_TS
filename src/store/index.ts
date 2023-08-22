import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './posts/slicesPosts';
import postReducer from './posts/slicesPost';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  reducer: {
    posts: postsReducer,
    post: postReducer
  }
});

export default store;