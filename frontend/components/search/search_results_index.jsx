import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';

class SearchResultsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.searchVideo();
  }



  render() {
    if (this.props.results.length > 0) {
      const { results } = this.props;
      console.log(this.props);

      return (
        <section className="all-videos">
          <ul className="videos">
            {results.map(vid => <VideoIndexItem key={vid.id} video={vid} />)}
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


export default SearchResultsIndex;
