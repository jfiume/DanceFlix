import React, { Component } from 'react';

class SearchResultItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "title",
      val: ""
    };
    this.onChangeVal = this.onChangeVal.bind(this);
    this.onSelectType = this.onSelectType.bind(this);
    this.renderForm = this.renderForm.bind(this);
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

  renderForm() {
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

  render() {
    const { results } = this.props;
    if (results.length > 0) {
      return (
        <div>{this.renderForm()}</div>
      );
    } else {
      return (
        <div>
          {this.renderForm()}
          <h1 className="no-results">No Results Found</h1>
        </div>
      );
    }
  }
}

export default SearchResultItems;
