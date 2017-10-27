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
    this.onChangeVal = this.onChangeVal.bind(this);
    this.onSelectType = this.onSelectType.bind(this);
  }

  onChangeVal(e) {
    e.preventDefault;
    this.setState({val: e.target.value}, () => {
      this.props.searchVideo({[this.state.type]: this.state.val});
    });
  }

  onSelectType(e) {
    e.preventDefault;
    this.setState({type: e.target.value});
  }

  render() {
    const {results} = this.props;
    return (
      <form className="search">
        <label htmlFor="search">Browse:</label>
        <input type="text" value={this.state.val} onChange={this.onChangeVal}/>
          <select name="search-type" onChange={this.onSelectType}>
            <option value="title">title</option>
            <option value="genre">genre</option>
            <option value="year">year</option>
          </select>
      </form>
    );
  }
}
export default SearchResultItems;
