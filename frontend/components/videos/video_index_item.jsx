import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteDetailContainer from '../favorites/favorite_detail_container';

const VideoIndexItem = ({ video }) => {
  return (
    <li className="video-index-item">
      <Link to={`/videos/${video.id}`}>
        <img src={video.image_url} alt={video.title} />
        <article className="attributes">
          <p>{video.title}</p>
          <p>{video.year}</p>
          <p>{video.description}</p>
        </article>
      </Link>
      <FavoriteDetailContainer videoId={video.id} favorite={video.favorites[0]}/>
    </li>
  );
};

export default VideoIndexItem;
