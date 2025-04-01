// 3. Weather Slice - redux/weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
  return response.data;
});

const weatherSlice = createSlice({
    name: 'weather',
    initialState: { data: {}, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWeather.pending, (state) => { state.loading = true; })
        .addCase(fetchWeather.fulfilled, (state, action) => { state.loading = false; state.data = action.payload; })
        .addCase(fetchWeather.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
    },
  });

export default weatherSlice.reducer;