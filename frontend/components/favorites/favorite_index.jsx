import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VideoIndexItemContainer from '../videos/video_index_item';

class FavoriteIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavoritesByUser(this.props.session.currentUser.id);
    this.props.fetchVideos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.favoriteVideos.length !== this.props.favoriteVideos.length) {
      this.props.fetchFavoritesByUser(this.props.session.currentUser.id);
      this.props.fetchVideos();
    }
  }

  render () {
    if (Object.keys(this.props.favoriteVideos).length > 0) {
      const { favoriteVideos } = this.props;
      const vidId = Object.values(favoriteVideos).map(fav => fav.id);
      if (vidId) {
        return (
          <section className="all-videos">
            <ul className="videos">
              {Object.values(favoriteVideos).map(favVid => <VideoIndexItemContainer key={favVid.id} video={favVid} />)}
            </ul>
          </section>
        );
      } else {
        return (
          <div>loading 1</div>
        );
      }
    } else {
      return (
        <div>loading 2</div>
      );
    }
    }
}

export default FavoriteIndex;
