import React, { Component } from 'react';
import { Link } from 'react-router'
import request from 'superagent';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { moviesById: {} }
  }

  componentDidMount() {
    var self = this;
    request
     .get('/api/movies/'+this.props.params.movieId)
     .set('Accept', 'application/json')
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('Oh no! error', err);
       } else {
         self.setState({moviesById: res.body});
       }
     });
  }

  render() {
    return (
      <div className="movie">
        <p>
          <Link to={`/`}>back to home</Link>
        </p>
        <ul id="list">
        <li>movie Id: {this.props.params.movieId}</li>
        <li>Title: {this.state.moviesById.title}</li>
        <li>ReleaseYear: {this.state.moviesById.releaseYear}</li>
        <li>Rating: {this.state.moviesById.avgRating}</li>
        <li>imdb: <a href={'http://www.imdb.com/title/tt'+this.state.moviesById.imdbMovieId} target="_blank">{this.state.moviesById.imdbMovieId}</a></li>
        <li>mpaa: {this.state.moviesById.mpaa}</li>
        <li>genres: {this.state.moviesById.genres}</li>
        <li>plotSummary: {this.state.moviesById.plotSummary}</li>
        </ul>
      </div>
    );
  }
}

export default Movie;
