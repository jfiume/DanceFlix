import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class FavoriteDetail extends Component {
  constructor(props) {
    super(props);

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(e) {
    e.preventDefault;
    if (this.props.favorite !== undefined) {
      console.log("I AM DELETING");
      return this.props.deleteFavorite(this.props.favorite.id);
    } else {
      console.log("I AM CREATING");
      return this.props.createFavorite({user_id: this.props.session.currentUser.id, video_id: this.props.videoId});
    }
  }

  toggleFavs() {
    if (this.props.favorite) {
      return "-";
    } else {
      return "+";
    }
  }

  render() {
    return (
    <button className="toggle-favorite" onClick={this.toggleFavorite}>{this.toggleFavs()}</button>
    );
  }
}

export default FavoriteDetail;
