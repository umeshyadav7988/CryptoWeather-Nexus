// 1. Weather Details Page - src/pages/weather.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

export default function Weather() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Weather Details</h1>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <div>
          <h2 className="text-2xl font-bold">City: {data.name}</h2>
          <p>Temperature: {data.main?.temp}°C</p>
          <p>Humidity: {data.main?.humidity}%</p>
          <p>Weather: {data.weather?.[0]?.description}</p>
        </div>
      )}
    </div>
  );
}
