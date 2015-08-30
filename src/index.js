'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Hotel from './components/Hotel';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <Hotel hotelId="1" />,
  mountNode
);
