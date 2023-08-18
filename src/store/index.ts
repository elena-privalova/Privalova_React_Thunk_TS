import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './posts/slices';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  reducer: {
    posts: postsReducer
  }
});

export default store;