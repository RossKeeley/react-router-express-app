import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/about")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });
  
  return (
    <div>
      <h1>This is the About page</h1>
      <p>{!data ? "Loading..." : data}</p>
      <Link to="/">Return to the home page</Link>
    </div>
  );
};

export default About;