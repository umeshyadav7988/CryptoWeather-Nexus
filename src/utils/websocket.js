// 5. WebSocket Setup - utils/websocket.js
import { io } from 'socket.io-client';

export const socket = io('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');

socket.on('message', (data) => {
  console.log('WebSocket Data:', JSON.parse(data));
});