import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Item } from './styles';
import { BoardContext } from 'components/Board';
import { useForceRender } from 'utils/customHooks';

const randomItem = () => Math.random() > 0.5 ? 'x' : '0';

export const Cell = ({ rowI, cellI }) => {
  const field = useContext(BoardContext)
  const content = field.cellContent(rowI, cellI)

  const forceRender = useForceRender()
  useEffect(() => {
    field.subscribeCellUpdates(rowI, cellI, forceRender)
    return () => field.unsubscribeCellUpdates(rowI, cellI)
  }, [forceRender])

  return (
    <Item onClick={() => field.setCell(rowI, cellI, randomItem())}>
      { content }
    </Item>
  );
};

Cell.propTypes = {    
  rowI: PropTypes.number.isRequired,
  cellI: PropTypes.number.isRequired
};
