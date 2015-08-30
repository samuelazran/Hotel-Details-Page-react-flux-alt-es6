'use strict';

import React from 'react';
import './hotel.css';
import HotelStore from '../stores/HotelStore';
import HotelActions from '../actions/HotelActions';
import Review from './Review';
import Offer from './Offer';


function getState() {
  return HotelStore.getState();
}

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the store and passes the new data to its children.
 */

class Hotel extends React.Component {

  constructor(props) {
    super(props);
    var initial = { hotelId: props.hotelId };
    this.state = initial;
    HotelStore.listen(this.onChange.bind(this));
  }

  /**
  * Triggered in every change in the store
  */
  onChange() {
    console.log('onChange', getState());
    this.setState(getState());
  }

  /**
  * Perform action on HotelActions
  */
  getHotel(hotelId) {
    console.log('getHotel', hotelId);
    HotelActions.getHotel(hotelId);
  }

  componentDidMount() {
    console.log('componentDidMount', this.state);
    this.getHotel(this.state.hotelId);
  }

  renderHotel(hotelData) {
    return (
      <div className="hotel">
        <h1>{hotelData.name}</h1>
        <div className="hotel-rating">
          <span className="hotel-rating__caption">rating: </span>
          <span className="hotel-rating__score">{hotelData.rating}</span>
        </div>
        <div className="hotel-description">{hotelData.description}</div>
        <address className="hotel-address">Address: {hotelData.address}</address>
        <div className="offers">
          <h2>Offers:</h2>
          {hotelData.offers.map(
            (offer, itemIndex) => {
              if (offer) {
                return <Offer {...offer} key={itemIndex} />;
              }
            })
          }
        </div>
        <div className="reviews">
          <h3>Reviews:</h3>
          {hotelData.reviews.map(
            (review, itemIndex) => {
              if (review) {
                return <Review text={review} key={itemIndex} />;
              }
            })
          }
        </div>
      </div>
    );
  }

  render() {
    if (this.state.hotel) {
      return this.renderHotel(this.state.hotel);
    } else {
      return <div>no data to show :(  maybe next time...</div>;
    }
  }
}


export default Hotel;
