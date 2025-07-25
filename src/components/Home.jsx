import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('token');

  return (
    <div>
      <h1>Welcome to JWT Auth App</h1>
      <p>This is the homepage. Choose an option:</p>
      {!token ? (
        <>
          <Link to="/">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/profile">Go to Profile</Link>
        </>
      )}
    </div>
  );
};

export default Home;
