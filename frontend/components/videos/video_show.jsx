import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class VideoShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.videoId !== nextProps.match.params.videoId) {
      this.props.fetchVideo(nextProps.props.match.params.videoId);
    }
  }

  render() {
    console.log(this.props);
    if (this.props.videoId) {

      return (
        <div>this works</div>
      //   <figure>
      //     <video controls>
      //       <source src={video.video_url}></source>
      //     </video>
      //   </figure>
      );
    } else {
      return (
        <div>loading</div>
      );
    }
  }
}

export default VideoShow;
