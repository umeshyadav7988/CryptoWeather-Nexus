// 6. Project Setup - src/pages/index.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import { fetchCrypto } from '../redux/cryptoSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { weather, crypto, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchWeather());
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">CryptoWeather Nexus</h1>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <div>
          <h2 className="text-2xl font-bold">Weather Data</h2>
          <pre>{JSON.stringify(weather, null, 2)}</pre>
          <h2 className="text-2xl font-bold mt-4">Crypto Data</h2>
          <pre>{JSON.stringify(crypto, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
