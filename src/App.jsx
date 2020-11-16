import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.scss';

import { Game } from './components/Game';

import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const App = () => (
  <div className="wrapper">
    <div className="App">
      <div className="App__main-image">
        <ThumbUp />
      </div>
      <div className="App__main main">
        <h1 className="main__title">
          Who wants to be
          <br />
          a millionaire?
        </h1>
        <Link className="main__btn" to="/game">
          Start
        </Link>

        <Route path="/game" component={Game} />
      </div>
    </div>
  </div>
);
