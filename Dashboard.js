// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from backend API
    axios.get('/api/userData')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Personalized Dashboard</h1>
      <div>
        {/* Display user data */}
        {userData.map(user => (
          <div key={user.id}>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            {/* Add more user data as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;