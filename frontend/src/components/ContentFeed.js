import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/content-feed.css";
import ImageCarousel from './ImageCarousel';

const ContentFeed = ({ setProfile }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/content-feed")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="content-feed">
      {(data.reverse() || []).map((post) => (
        <div className="content-feed__post">
          <div className="content-feed__post-header">
            <Link 
              className="post-header__image-link" 
              to={`/users/${post.forename + post.surname}`}  
              onClick={
                setProfile(post.forename + " " + post.surname)
              }
            >
              <img className="post-header__image" src={post.profileImage} alt="" />
            </Link>
              <h4 className="post-header__name">
                <Link 
                  className="post-header__name-link" 
                  to={`/users/${post.forename + post.surname}`} 
                  onClick={
                    setProfile(post.forename + " " + post.surname)
                  }
                >
                  {post.forename + " " + post.surname}
                </Link>
              </h4>
          </div>
          <div className="content-feed__post-body">
            {post.text !== "" && (
              <p className="post-body__text">{post.text}</p>
            )}
            {/* {post.image !== "" &&  */}
              {/* {(post.image || []).map((image) => (
                <img className="post-body__image" src={image} alt="" />
              ))} */}
            {/* } */}
          </div>
          <ImageCarousel images={post.image} />
        </div>
      ))}
    </div>
  );
};

export default ContentFeed;