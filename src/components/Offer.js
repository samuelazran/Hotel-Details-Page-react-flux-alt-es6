'use strict';

import React from 'react';
import './offer.css';


class Offer extends React.Component {

  render() {
    return (
      <div className="offer">
        <div>{this.props.description}</div>
        <div>Price per night: {this.props.price_per_night} {this.props.currency}</div>
        <div>Total: {this.props.total} {this.props.currency}</div>
        <div><a href={this.props.link}>SEE MORE</a></div>
      </div>
    );
  }

}


export default Offer;
