import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import { Wrapper } from './styles';

export const Row = ({ data, setContent, rowI }) => (
  <Wrapper>
    {
      data.map((cell, cellI) => (
        <Cell 
          coordinates={{rowI, cellI}}
          content={cell}
          setContent={setContent}
        />
      ))
    }
  </Wrapper>
);

Row.propTypes = {
  data: PropTypes.array.isRequired,
  rowI: PropTypes.number.isRequired,
  setContent: PropTypes.func.isRequired,
};
