import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY } from './assets';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (city: string) => {
    const current = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return { current: current.data, forecast: forecast.data };
  }
);
