import React from 'react';
import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';

import { selectMainBoxes } from '../../redux/main/main.selector';

import MenuItem from '../menu-item/menu-item'; 

import './main.scss';

const Main = ({ boxes }) => (
  <div className='main-menu'> 
    {boxes.map(({ id, ...otherSectionProps }) => (
      <MenuItem key= {id} {...otherSectionProps} />
      ))}
  </div>
);

const mapsStateToProps = createStructuredSelector({
   boxes: selectMainBoxes
})

export default connect(mapsStateToProps)(Main);