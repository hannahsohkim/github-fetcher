import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #99999;
  border-radius: 3px;
  &:focus {outline: none; box-shadow:0 0 10px #D6D0C4;}
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);

  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username:
      <input
        value={this.state.terms}
        onChange={this.onChange}
      />
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;