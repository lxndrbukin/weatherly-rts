import { createAsyncThunk } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (city: string) => {}
);
