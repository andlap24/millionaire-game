import React from 'react';
import './Scores.scss';

// eslint-disable-next-line
import { ReactComponent as ScoreBlock } from '../../images/rectangle-border-score.svg';

const scores = [
  '$1,000,000',
  '$500,000',
  '$250,000',
  '$125,000',
  '$64,000',
  '$32,000',
  '$16,000',
  '$4,000',
  '$2,000',
  '$1,000',
  '$500',
];

export const Scores = () => (
  scores.map(score => <div className="scores__item"><ScoreBlock /></div>)
);
