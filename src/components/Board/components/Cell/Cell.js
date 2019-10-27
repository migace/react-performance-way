import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './styles';

export const Cell = ({ content, setContent, coordinates }) => {
  const randomItem = () => Math.random() > 0.5 ? 'x' : '0';

  return (
    <Item onClick={() => setContent(coordinates.rowI, coordinates.cellI, randomItem())}>
      { content }
    </Item>
  );
}

Cell.propTypes = {  
  coordinates: PropTypes.shape({
    rowI: PropTypes.number.isRequired,
    cellI: PropTypes.number.isRequired,
  }),
  setContent: PropTypes.func.isRequired,
  content: PropTypes.string,
};
