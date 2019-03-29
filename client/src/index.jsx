import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    this.get();
  }

   get() {
    $.get('http://localhost:1128/repos', (data) => {
      this.setState({repos: data})
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: 'http://localhost:1128/repos',
      type: 'POST',
      data: {username: term},
      dataType: 'application/JSON',
      success: () => {this.get()}
    })
  }

  render () {
    console.log(this.state.repos, 'REPOS')
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));