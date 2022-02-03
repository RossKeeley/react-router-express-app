import React from 'react';
// import { Link } from 'react-router-dom';

const Profile = ({ profile }) => {
  
  return (
    <div className="profile">
      <h2>{`Welcome to the profile page for ${profile}!`}</h2>
    </div>
  );
};

export default Profile;