import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/content-feed.css";

const ContentFeed = (setProfile) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/content-feed")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  console.log(data);
  return (
    <div className="content-feed">
      {(data || []).map((post) => (
        <div className="content-feed__post">
          <div className="content-feed__post-header">
            {/* <Link className="post-header__image-link" to={post.forename + post.surname}> */}
              <img className="post-header__image" src={post.profileImage} alt="" />
            {/* </Link> */}
            <Link className="post-header__text-link" to={post.forename + post.surname} >
              <h4 className="post-header__name">{post.forename + " " + post.surname}</h4>
            </Link>
          </div>
          <div className="content-feed__post-body">
            <p className="post-body__text">{post.text}</p>
            {post.image !== "" && (
              <img src={post.image} alt="" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentFeed;