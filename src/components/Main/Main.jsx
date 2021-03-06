import React from 'react';
import './Main.scss';

import { Link } from 'react-router-dom';

export const Main = () => (
  <div className="wrapper">
    <div className="App">
      <div className="App__main-image" />
      <div className="App__main main">
        <h1 className="main__title">
          Who wants to be
          <br />
          a millionaire?
        </h1>
        <Link to="/game">
          <button
            type="button"
            className="main__btn"
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  </div>
);
