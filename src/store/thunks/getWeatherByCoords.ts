import { createAsyncThunk } from '@reduxjs/toolkit';
import { CoordsProps } from './types';
import axios from 'axios';
import { API_KEY } from './assets';

export const getWeatherByCoords = createAsyncThunk(
  'weather/getWeatherByCoords',
  async ({ lat, lon }: CoordsProps) => {
    const current = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return { current: current.data, forecast: forecast.data };
  }
);
