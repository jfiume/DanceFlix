import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';

class FavoriteIndex extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchFavorites();
    this.props.fetchVideos();
  }

  render () {
    if (Object.keys(this.props.favorites).length > 0) {
      console.log(this.props);
      // Object.values(favorites).forEach(fav => {
      //   console.log(fav);
      //   console.log(this.props);
      // }

      return (
        <div>does this work?</div>
      //   <section className="all-videos">
      //     <ul className="videos">
      //       {favoriteVideos.map(favVid => <VideoIndexItem key={favVid.id} videoId={favVid} />)}
      //     </ul>
      //   </section>
      );
    } else {
      return (
        <div>loading</div>
      );
    }
    }
}

export default FavoriteIndex;
