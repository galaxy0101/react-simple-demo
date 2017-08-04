import React, { Component } from 'react';
import { Link } from 'react-router'
import request from 'superagent';

class RootContainer extends Component {
  constructor() {
    super();
    this.state = { movies: [] }
  }

  componentDidMount() {
    var self = this;
    request
     .get('/api/movies')
     .set('Accept', 'application/json')
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('Oh no! error', err);
       } else {
         self.setState({movies: res.body.movieList});
       }
     });
  }

  render() {
    return <Root movies={this.state.movies} />;
  }

}

class Root extends Component {
  render() {
    return (
      <div className="Root">
      <ul>
      {this.props.movies.map(function(movie){
        return(
          <li id="list" key={movie.movieId}>
              {movie.movieId}
              Title: <Link to={`/movie/${movie.movieId}`}>{movie.title}</Link>
              ReleaseYear: {movie.releaseYear}
              Rating: {movie.avgRating}
          </li>
        );
      })}
      </ul>
        <p>
          Root! <Link to={`/foo`}>a link to foo</Link>
        </p>
      </div>
    );
  }
}

Root.propTypes = {
  movies: React.PropTypes.array
};

export default RootContainer;
