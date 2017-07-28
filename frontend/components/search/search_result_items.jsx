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
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault;
    this.setState({val: e.target.value}, () => {

      this.props.searchVideo({[this.state.type]: this.state.val});
    });
  }

  onSubmit(e) {
    e.preventDefault;
    const {results} = this.props;
    return (
    <SearchResultsContainer results={results}/>
    );
  }

  render() {
    const {results} = this.props;
    // console.log(this.props);
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.val} onChange={this.onChange} type="submit" />
        <Results results={results}/>
      </form>
    );
  }
}
export default SearchResultItems;

const Results = ({results}) => {
  if (results.length) {
    return (<ul>{
      results.map((result, i) => <li key={i}>{result.title}</li>)
    }</ul>);
  }

  return <span>No Results</span>;
};
