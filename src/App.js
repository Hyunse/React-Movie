import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: 'Matirx',
    poster: 'https://lh3.googleusercontent.com/r1nBasWl5jpipLOx93lGbLH89vnCrhlRQAXr2co8XRFRW3INBh3kQpzPMAD2Conm0wsr=w200-h300'
  },
  {
    title: 'Oldboy',
    poster: 'https://i.ytimg.com/vi/2HkjrJ6IK5E/hqdefault.jpg'
  },
  {
    title: 'Start Wars',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png'
  },
  {
    title: 'CoCo',
    poster: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/coco-poster0.jpg?itok=BrD_OWJI'
  }
];


class App extends Component {
  render() {
    return (
      // jsx
      <div className="App">
        {movies.map((movie) => {
          return <Movie title={movie.title} image={movie.poster}/>;
        })}
      </div>
    );
  }
}

export default App;
