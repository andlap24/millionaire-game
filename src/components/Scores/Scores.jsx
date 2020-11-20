import React from 'react';
import PropTypes from 'prop-types';
import './Scores.scss';

import classNames from 'classnames';
import { stack as Menu } from 'react-burger-menu';

import scores from '../../api/scores.json';

export const Scores = ({ counter }) => (
  <>
    <div className="scores">
      {scores.map(score => (
        <div
          key={score.id}
          className={classNames(
            counter === score.id
              ? 'scores__item--active'
              : 'scores__item',
          )}
        >
          {score.score}
        </div>
      ))}
    </div>

    <Menu
      right
      // eslint-disable-next-line
      width={'100%'}
      disableAutoFocus
      itemListElement="div"
    >
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
    </Menu>
  </>
);

Scores.propTypes = {
  counter: PropTypes.number.isRequired,
};
