import React from 'react';
import { Board } from 'components/Board';

const size = 100;
const initialBoard = new Array(size).fill(new Array(size).fill(undefined));

export const Game = () => {
  return (
    <Board initialBoard={initialBoard} />
  );
};
