import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'classes/Field';
import { Row } from './components/Row';
import { Wrapper } from './styles';

export const BoardContext = createContext()

export const Board = ({ size }) => {
  const [field] = useState(() => new Field(size));

  return (
    <BoardContext.Provider value={field}>
      <Wrapper>
        {
          field.map((row, rowI) => <Row key={rowI} data={row} rowI={rowI} />)
        }
      </Wrapper>
    </BoardContext.Provider>
  )
};

Board.propTypes = {
  size: PropTypes.number.isRequired,
};
