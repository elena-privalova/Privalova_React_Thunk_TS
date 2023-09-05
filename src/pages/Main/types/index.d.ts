import store from '../../../store';

export type RootState = ReturnType<typeof store.getStore>;
export type AppDispatch = typeof store.dispatch;

