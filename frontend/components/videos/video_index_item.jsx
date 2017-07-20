import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = ({ video }) => (
  <li className="video-index_item">
    <Link to={`/video/${video.id}`}>
      <span> {video.title} </span>
      <img src={video.image_url} alt={video.title} />
    </Link>
  </li>
);

export default VideoIndexItem;
