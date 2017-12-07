import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {dummyData.map((datum, index) => <PostContainer key={index} datum={datum} id={index}/>)}
      </div>
    );
  }
}

export default App;
