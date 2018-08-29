import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount(){

  }

PerformSearch = (query) => {
  // Make a request for a user with a given ID
axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
  .then(response => {
    this.setState({
        gifs: response.data.data
    });
    // handle success
  })
  .catch(error => {
    // handle error
    console.log('Error fetching and parsing data', error);
  });

}

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm  onSearch={this.PerformSearch}/>
          </div>
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}
