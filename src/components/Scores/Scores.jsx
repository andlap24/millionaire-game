import React from 'react';
import PropTypes from 'prop-types';
import './Scores.scss';

import classNames from 'classnames';
import { stack as Menu } from 'react-burger-menu';

import scores from '../../api/scores.json';

export const Scores = ({ counter }) => {
  // eslint-disable-next-line
  const showSettings = event => (
    event.preventDefault()
  );

  return (
    <>
      <div className="scores">
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

      <Menu
        right
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
};

Scores.propTypes = {
  counter: PropTypes.number.isRequired,
};
