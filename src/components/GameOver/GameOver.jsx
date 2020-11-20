import React from 'react';
import PropTypes from 'prop-types';
import './GameOver.scss';

import { Link } from 'react-router-dom';

export const GameOver = (props) => {
  const winScore = props.history.location.pathname.slice(11);

  return (
    <div className="game-over">
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
  history: PropTypes.string.isRequired,
};
