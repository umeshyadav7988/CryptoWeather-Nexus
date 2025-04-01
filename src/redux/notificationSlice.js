// 3. Notification Slice - src/redux/notificationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: { messages: [] },
  reducers: {
    addNotification: (state, action) => {
      state.messages.push(action.payload);
    },
    removeNotification: (state, action) => {
      state.messages = state.messages.filter((msg, index) => index !== action.payload);
    }
  }
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;