import React from 'react';
import "../styles/profile.css";
// import { Link } from 'react-router-dom';

const Profile = ({ profile }) => {
  console.log(profile)
  
  return (
    <div className="profile">
      <h2 className="profile__heading">
        Welcome to the profile page for <span className="profile__name">{profile}</span>!
      </h2>
    </div>
  );
};

export default Profile;