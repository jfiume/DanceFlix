import React, { Component } from 'react';
import {SearchResultsIndex} from './search_results_index';
import SearchResultsContainer from './search_results_index_container';

class SearchResultItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "title",
      val: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault;
    this.setState({val: e.target.value}, () => {
      this.props.searchVideo({[this.state.type]: this.state.val});
    });
  }

  render() {
    const {results} = this.props;
    // console.log(this.props);
    return (
      <form className="search">
        <input type="text" value={this.state.val} onChange={this.onChange} />
      </form>
    );
  }
}
export default SearchResultItems;
