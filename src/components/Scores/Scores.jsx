import React from 'react';
import PropTypes from 'prop-types';
import './Scores.scss';

import classNames from 'classnames';

import scores from '../../api/scores.json';

export const Scores = ({ counter }) => (
  <div className="Game__scores scores">
    {scores.map(score => (
      <div className={classNames(
        counter === score.id
          ? 'scores__item--active'
          : 'scores__item',
      )}
      >
        <div>{score.score}</div>
      </div>
    ))}
  </div>
);

Scores.propTypes = {
  counter: PropTypes.number.isRequired,
};
