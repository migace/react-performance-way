import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import { Wrapper } from './styles';

export const Row = memo(({ data, setContent, rowI }) => (
  <Wrapper>
    {
      data.map((cell, cellI) => (
        <Cell
          key={cellI}
          rowI={rowI}
          cellI={cellI}
          content={cell}
          setContent={setContent}
        />
      ))
    }
  </Wrapper>
));

Row.propTypes = {
  data: PropTypes.array.isRequired,
  rowI: PropTypes.number.isRequired,
};
