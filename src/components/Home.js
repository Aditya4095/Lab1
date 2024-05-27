import React, { useEffect, useRef } from 'react';

const Home = ({ visits, setVisits }) => {
  const isFirstVisit = useRef(true);

  useEffect(() => {
    if (isFirstVisit.current) {
      setVisits(prevVisits => prevVisits + 1);
      isFirstVisit.current = false;
    }
  }, [setVisits]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Banner ID:</p>
      <p>Home page visited {visits} times</p>
    </div>
  );
};

export default Home;
