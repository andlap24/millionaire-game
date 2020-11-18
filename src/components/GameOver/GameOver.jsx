import React from 'react';
import PropTypes from 'prop-types';
import './GameOver.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as ThumbUp } from '../../images/thumb-up.svg';

export const GameOver = ({ totalScore }) => (
  <div className="game-over">
    <div className="game-over__image">
      <ThumbUp />
    </div>
    <div className="game-over__main main">
      <p className="main__text">
        <span>
          Total score:
        </span>
        <br />
        {`${totalScore} earned`}
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

GameOver.propTypes = {
  totalScore: PropTypes.string.isRequired,
};