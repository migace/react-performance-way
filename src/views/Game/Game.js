import React from 'react';
import { Board } from 'components/Board';
import { Field } from 'classes/Field';

const size = 100;

export const Game = () => {
  return (
    <Board size={size} />
  );
};
