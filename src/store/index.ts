import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './posts/slicesPosts';
import cardReducer from './posts/slicesCard';
import commentsReducer from './comments/slicesComments';
import modalsReducer from './modals/slicesModals'
import authReducer from './auth/slicesAuth';
import userReducer from './user/slicesUser';

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
    auth: authReducer,
    user: userReducer,
  }
});

export default store;

