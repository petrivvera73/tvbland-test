import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { showsSlice } from './shows/showsSlice';

const rootReducer = combineReducers({
  shows: showsSlice.reducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
