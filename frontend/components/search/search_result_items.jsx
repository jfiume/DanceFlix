import React, { Component } from 'react';

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
    console.log(this.props);
    return (
      <div>
        <input type="text" value={this.state.val} onChange={this.onChange} />
        <Results results={results}/>
      </div>
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
