import React from 'react';

import RestaurantList from '../RestaurantList/RestaurantList';

import './Board.scss';

const Board = ({ selectedRestaurant, shuffle }) => {
  return (
    <>
      <RestaurantList selectedRestaurant={selectedRestaurant} shuffle={shuffle} />
    </>
  );
};

export default Board;
