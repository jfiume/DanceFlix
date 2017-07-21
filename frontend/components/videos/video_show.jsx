import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class VideoShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.videoId !== nextProps.match.params.videoId) {
      this.props.fetchVideo(nextProps.props.match.params.videoId);
    }
  }

  render() {
    if (this.props.videoId) {
      const video = this.props.currentVideo.video;
      console.log(video.video_url);
      return (
        <iframe className="current-video" height="500" width="500" src={video.video_url} frameborder="0" allowFullScreen></iframe>
      );
    } else {
      return (
        <div>loading</div>
      );
    }
  }
}

export default VideoShow;
