import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VideoIndexItemContainer from '../videos/video_index_item';

class ViewsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchViewsByUser(this.props.session.currentUser.id);
    this.props.fetchVideos();
  }


  render() {
    if (this.props.results.length > 0) {
      const { results } = this.props;
      return (
        <section className="all-videos">
          <ul className="videos">
            {results.map(vid => <VideoIndexItemContainer key={vid.id} video={vid} />)}
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


export default ViewsIndex;
