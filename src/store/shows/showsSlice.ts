/* eslint no-param-reassign: 0 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShow } from '../../types/shows';
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from '../actionTypeChecker';
import { getShowDetails, getShows } from './showsThunk';

const initialState: {
  isFetching: boolean;
  errorMessage: string | null;
  items: IShow[];
  current: IShow | null;
} = { isFetching: false, errorMessage: null, items: [], current: null };

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    resetErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShows.fulfilled, (state, action: PayloadAction<IShow[]>) => {
        state.items = action.payload;
      })
      .addCase(
        getShowDetails.fulfilled,
        (state, action: PayloadAction<IShow>) => {
          state.current = action.payload;
        }
      )
      .addMatcher(isFulfilledAction, (state) => {
        state.isFetching = false;
      })
      .addMatcher(isPendingAction, (state) => {
        state.isFetching = true;
      })
      .addMatcher(isRejectedAction, (state, { payload }) => {
        state.isFetching = false;
        state.errorMessage = payload.message;
      });
  },
});

export const { resetErrorMessage } = showsSlice.actions;
