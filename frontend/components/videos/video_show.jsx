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
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchVideo(nextProps.match.params.id);
    }
  }

  render() {
    if (this.props.videoId === parseInt(this.props.match.params.id)) {
      const video = this.props.currentVideo.video;
      return (
        <iframe className="current-video" src={video.video_url} frameBorder="0" allowFullScreen></iframe>
      );
    } else {
      return (
        <div>loading</div>
      );
    }
  }
}

export default VideoShow;
