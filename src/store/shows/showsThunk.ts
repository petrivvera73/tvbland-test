import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IShow } from '../../types/shows';
import { IFetchError } from '../../types/utils';

export const getShows = createAsyncThunk(
  'shows/getShows',
  async (_, { rejectWithValue }) => {
    try {
      const today = new Date();
      const todayString = `${today.getFullYear().toString()}-${(
        today.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
      const { data } = await axios.get(`/schedule?date=${todayString}`);
      const remappedData = data
        .map((item: { show: IShow }) => item.show)
        .filter((show: IShow, index: number, array: IShow[]) => {
          return array.findIndex((e) => e.id === show.id) === index;
        });
      return remappedData || [];
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
