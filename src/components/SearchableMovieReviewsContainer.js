import React, { Component } from 'react'

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let url =`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`;
    return fetch(`${url}`).then(response => response.json()).then(data => this.setState({reviews: data.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews: </label>
          <input
            id='search-input'
            type="text"
            onChange={this.handleSearch} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 ? <h2>Movie Review By Search:</h2> : null}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
