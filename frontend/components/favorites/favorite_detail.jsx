import React, { Component } from 'react';

class FavoriteDetail extends Component {
  constructor(props) {
    super(props);

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(e) {
    e.preventDefault;
    console.log(this.props.favorite);
    if (this.props.favorite) {
      console.log(`I AM DELETING ${this.props.favorite.id}`);
      return (
        this.props.deleteFavorite(this.props.favorite.id)
      );
    } else {
      console.log("I AM CREATING");
      return (
        this.props.createFavorite(
          {user_id: this.props.session.currentUser.id,
            video_id: this.props.videoId}
        )
      );
    }
  }

  // toggleFavorite(e) {
  //   e.preventDefault;
  //   console.log(this.props.favorite);
  //   if (!this.props.favorite) {
  //     console.log("I AM CREATING");
  //     return (
  //       this.props.createFavorite(
  //         {user_id: this.props.session.currentUser.id,
  //           video_id: this.props.videoId}
  //       )
  //     );
  //   } else {
  //     console.log(`I AM DELETING ${this.props.favorite.id}`);
  //     return (
  //       this.props.deleteFavorite(this.props.favorite.id)
  //     );
  //   }
  // }



  toggleFavs() {
    if (this.props.favorite) {
      return '💔';
    } else {
      return '❤️';
    }
  }

  render() {
    return (
    <button className="toggle-favorite" onClick={this.toggleFavorite}>{this.toggleFavs()}</button>
    );
  }
}

export default FavoriteDetail;
