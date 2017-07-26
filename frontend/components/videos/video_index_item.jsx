import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteDetailContainer from '../favorites/favorite_detail_container';

const VideoIndexItem = ({ video, fav }) => {
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
      <FavoriteDetailContainer videoId={video.id} favorite={video.favorites[0]}/>
    </li>
  );
};

export default VideoIndexItem;
