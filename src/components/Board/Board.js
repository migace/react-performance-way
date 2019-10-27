import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Row } from './components/Row';
import { Wrapper } from './styles';

export const Board = ({ initialBoard }) => {  
  const [board, setBoard] = useState(initialBoard);

  const setContent = useCallback((rowI, cellI, content) =>
    setBoard((oldBoard) => [
      ...oldBoard.slice(0, rowI),
      [
        ...oldBoard[rowI].slice(0, cellI),
        content,
        ...oldBoard[rowI].slice(cellI + 1)
      ],
      ...oldBoard.slice(rowI + 1),
    ]), []);

  return (
    <Wrapper>
      {
        board.map((row, rowI) => <Row key={rowI} data={row} setContent={setContent} rowI={rowI} />)
      }
    </Wrapper>
  )
};

Board.propTypes = {
  initialBoard: PropTypes.array.isRequired,
};
