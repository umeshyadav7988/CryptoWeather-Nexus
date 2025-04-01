// 2. Crypto Details Page - src/pages/crypto.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCrypto } from '../redux/cryptoSlice';

export default function Crypto() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Crypto Details</h1>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <div>
          {Object.keys(data).map((key) => (
            <div key={key} className="mb-4">
              <h2 className="text-2xl font-bold">{key.toUpperCase()}</h2>
              <p>Price: ${data[key].usd}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}