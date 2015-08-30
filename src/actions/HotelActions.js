'use strict';

import alt from '../alt';


class HotelActions {
  constructor() {
    this.generateActions(
      'getHotel'
    );
  }
}


export default alt.createActions(HotelActions);
