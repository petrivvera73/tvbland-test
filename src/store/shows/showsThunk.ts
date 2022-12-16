import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFetchError } from '../../types/utils';

export const getShows = createAsyncThunk(
  'shows/getShows',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/shows');
      return data || [];
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
      const { data } = await axios.get(`/categories/${id}?embed=cast`);
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
