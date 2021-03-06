import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    if (Object.keys(this.props.videos).length > 0) {
      const { videos } = this.props;

      return (
        <section className="all-videos">
          <ul className="videos">
            {Object.values(videos).map(vid => <VideoIndexItemContainer key={vid.id} video={vid} />)}
          </ul>
        </section>
      );
    } else {
      return (
        <div>loading</div>
      );
    }
    }
}

export default VideoIndex;
