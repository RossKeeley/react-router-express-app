import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/contact")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });
  
  return (
    <div>
      <h1>This is the Contact page</h1>
      <p>{!data ? "Loading..." : data}</p>

      <Link to="/">Return to the home page</Link>
    </div>
  );
};

export default Contact;