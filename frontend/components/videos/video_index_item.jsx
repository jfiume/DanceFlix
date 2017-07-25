import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = ({ video, fav, favId, deleteFavorite}) => {
  return (
    <li className="video-index-item">
      <Link to={`/videos/${video.id}`}>
        <img src={video.image_url} alt={video.title} />
        <article className="attributes">
          <p>Title: {video.title}</p>
          <p>Description: {video.description}</p>
          <p>Dance Style: {video.genre}</p>
          <p>Year: {video.year}</p>
        </article>
      </Link>
      <button className="toggle-favorite" onClick={deleteFavorite}>{fav}</button>
    </li>
  );
};

export default VideoIndexItem;
