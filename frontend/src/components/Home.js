import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ContentFeed from './ContentFeed';

const Home = ({ setProfile }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

  return (
    <div>
      <h1>This is the Home page</h1>
      <p>{!data ? "Loading..." : data}</p>
      <Link to="about">Click to view the about page</Link>
      <Link to="contact">Click to view the contact page</Link>
      <ContentFeed setProfile={setProfile} />
    </div>
  );
};

export default Home;