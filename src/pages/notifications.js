// 5. Notifications Page - src/pages/notifications.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../redux/notificationSlice';

export default function Notifications() {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.notifications);

  const handleRemove = (index) => {
    dispatch(removeNotification(index));
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Notifications</h1>
      {messages.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className="mb-2">
              <span>{msg}</span>
              <button className="ml-4 bg-red-500 text-white px-2 py-1" onClick={() => handleRemove(index)}>Dismiss</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
