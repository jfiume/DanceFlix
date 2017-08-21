import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavoriteDetailContainer from '../favorites/favorite_detail_container';

class VideoIndexItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    return (
      this.props.createView({video_id: this.props.video.id})
    );
  }

  render() {
    const { video } = this.props;
    return (
      <li className="video-index-item" onClick={this.onClick}>
        <Link to={`/videos/${video.id}`}>
          <img src={video.image_url} alt={video.title} />
          <article className="attributes">
            <p>{video.title}</p>
          </article>
        </Link>
        <FavoriteDetailContainer videoId={video.id} favorite={video.favorites[0]}/>
      </li>
    );
  }
}

export default VideoIndexItem;
