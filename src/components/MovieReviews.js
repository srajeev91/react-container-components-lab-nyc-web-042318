// Code MovieReviews Here
import React, { Component } from 'react'

import UUID from 'uuid'

const MovieReviews = (props) => {
  let latestreviews = props.reviews.map(review => {
    return (
      <div key={UUID()} className="review">
        <h4>{review.display_title}</h4>
        <p>{review.headline}</p>
      </div>
    )
  })

  MovieReviews.defaultProps = {
    reviews: []
  }

  return (
    <div className="review-list">{latestreviews}</div>
  )

}

export default MovieReviews;
