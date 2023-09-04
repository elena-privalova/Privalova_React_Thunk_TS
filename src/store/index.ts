import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './posts/slicesPosts';
import cardReducer from './posts/slicesCard';
import commentsReducer from './comments/slicesComments';
import modalsReducer from './modals/slicesModals';
import signUpReducer from './auth/slicesSignUp';
import authReducer from './auth/slicesAuth';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  reducer: {
    posts: postsReducer,
    card: cardReducer,
    comments: commentsReducer,
    modals: modalsReducer,
    signup: signUpReducer,
    auth: authReducer,
  }
});

export default store;
