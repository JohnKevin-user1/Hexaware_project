import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Profile = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    API.get('/profile')
      .then(res => setEmail(res.data.email))
      .catch(() => alert("Unauthorized or invalid token."));
  }, []);

  return (
    <div>
      <h2>Welcome</h2>
      <p>Your email: {email}</p>
    </div>
  );
};

export default Profile;
