import React from 'react';
import { Link } from 'react-router-dom';


const VideoIndexItem = ({ video }) => {
  return (
    <li className="video-index-item">
      <Link to={`/videos/${video.id}`}>
        <article className="attributes">
          <p>Title: {video.title}</p>
          <p>Description: {video.description}</p>
          <p>Dance Style: {video.genre}</p>
          <p>Year: {video.year}</p>
        </article>
        <img src={video.image_url} alt={video.title} />
      </Link>
    </li>
  );
};

export default VideoIndexItem;
