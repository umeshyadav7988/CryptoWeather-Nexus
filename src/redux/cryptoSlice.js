// 4. Crypto Slice - redux/cryptoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCrypto = createAsyncThunk('crypto/fetchCrypto', async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
  return response.data;
});

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState: { data: {}, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCrypto.pending, (state) => { state.loading = true; })
        .addCase(fetchCrypto.fulfilled, (state, action) => { state.loading = false; state.data = action.payload; })
        .addCase(fetchCrypto.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
    },
  });
  
export default cryptoSlice.reducer;

  