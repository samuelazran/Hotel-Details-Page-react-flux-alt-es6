'use strict';

import React from 'react';
import './review.css';


class Review extends React.Component {

  render() {
    return (
      <div className="review">
        {this.props.text}
      </div>
    );
  }

}


export default Review;
