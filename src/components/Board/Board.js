import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row } from './components/Row';
import { Wrapper } from './styles';

export const Board = ({ size }) => {
  const initialBoard = new Array(size).fill(new Array(size).fill(undefined));
  const [board, setBoard] = useState(initialBoard);

  const setContent = (rowI, cellI, content) => {
    setBoard([
      ...board.slice(0, rowI),
      [
        ...board[rowI].slice(0, cellI),
        content,
        ...board[rowI].slice(cellI + 1)
      ],
      ...board.slice(rowI + 1),
    ]);
  };

  return (
    <Wrapper>
      {
        board.map((row, rowI) => <Row data={row} setContent={setContent} rowI={rowI} />)
      }
    </Wrapper>
  )
};

Board.propTypes = {
  size: PropTypes.number.isRequired,
};
