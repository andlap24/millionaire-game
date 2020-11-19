/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './GameOver.scss';

import { Link } from 'react-router-dom';

export const GameOver = (props) => {
  const winScore = props.history.location.pathname.replace(/[^-0-9-.]/, '');

  return (
    <div className="game-over">
      {console.log(winScore)}
      <div className="game-over__image" />
      <div className="game-over__main main">
        <p className="main__text">
          <span>
            Total score:
          </span>
          <br />
          {`${winScore} earned`}
        </p>
        <Link to="/">
          <button
            type="button"
            className="main__btn"
          >
            Try again
          </button>
        </Link>
      </div>
    </div>
  );
};

GameOver.propTypes = {
  winScore: PropTypes.string.isRequired,
};
