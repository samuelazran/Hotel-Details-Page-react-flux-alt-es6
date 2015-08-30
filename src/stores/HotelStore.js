'use strict';

import alt from '../alt';
import HotelActions from '../actions/HotelActions';
import hotelData from '../data/hotels/1.js';


class HotelStore {

  constructor() {
    this.bindActions(HotelActions);
    this.hotel = null;
  }

  onGetHotel(hotelId) {
    console.log('HotelStore::onGetHotel::hotelId', hotelId);
    console.log('HotelStore::onGetHotel::hotelData', hotelData);
    this.hotel = hotelData;
  }

}


export default alt.createStore(HotelStore);
