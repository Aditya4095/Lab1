// Home.js
import React, { useEffect } from 'react';

const Home = ({ visits, setVisits }) => {

  useEffect(() => {
    setVisits(visits++);
  }, [setVisits, visits]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Home page visited {visits} times</p>
      <p>Display your Banner Id: {bannerId}</p>
    </div>
  );
};

export default Home;
