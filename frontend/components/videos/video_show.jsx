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
    console.log("id " + parseInt(this.props.match.params.id));
    console.log("videoId " + this.props.videoId);
    if (this.props.videoId === parseInt(this.props.match.params.id)) {
      console.log("videoObject " + this.props.currentVideo.video);
      const video = this.props.currentVideo.video;
      return (
        <iframe className="current-video" height="500" width="500" src={video.video_url} frameBorder="0" allowFullScreen></iframe>
      );
    } else {
      return (
        <div>loading</div>
      );
    }
  }
}

export default VideoShow;
