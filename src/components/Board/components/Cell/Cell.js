import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Item } from './styles';

const randomItem = () => Math.random() > 0.5 ? 'x' : '0';

export const Cell = memo(({ content, setContent, rowI, cellI }) => {  
  return (
    <Item onClick={() => setContent(rowI, cellI, randomItem())}>
      { content }
    </Item>
  );
});

Cell.propTypes = {  
  coordinates: PropTypes.shape({
    rowI: PropTypes.number.isRequired,
    cellI: PropTypes.number.isRequired,
  }),
  setContent: PropTypes.func.isRequired,
  content: PropTypes.string,
};
