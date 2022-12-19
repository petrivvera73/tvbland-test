import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IFetchError } from '../../types/utils';
import { fetchScheduledShows } from '../../services/fetchScheduledShows';
import { fetchShowDetails } from '../../services/fetchShowDetails';

export const getShows = createAsyncThunk(
  'shows/getShows',
  async (_, { rejectWithValue }) => {
    try {
      const today = new Date();
      const data = fetchScheduledShows(today);
      return data;
    } catch (err) {
      const error = err as AxiosError<IFetchError>;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getShowDetails = createAsyncThunk(
  'shows/getShowDetails',
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await fetchShowDetails(id);
      return data;
    } catch (err) {
      const error = err as AxiosError<IFetchError>;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
