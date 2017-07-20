import React from 'react';
import { Link } from 'react-router-dom';


const VideoIndexItem = ({ video }) => {
  // console.log(video);
  return (
    <li className="video-index-item">
      <Link to={`/videos/${video.id}`}>
        <span>{video.title}</span>
        <img src={video.image_url} alt={video.title} />
      </Link>
    </li>
  );
};

export default VideoIndexItem;
