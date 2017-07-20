import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    if (Object.keys(this.props.videos).length > 0) {
      console.log(this.props.videos);
      const { videos } = this.props;
      // console.log(Object.values(videos));
      return (
        <section className="videos">
          <ul>
            {Object.values(videos).map(vid => <VideoIndexItem key={vid.id} video={vid} />)}
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
