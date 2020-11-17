import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { Main } from './components/Main';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';

export const App = () => (
  <Switch>
    <Route path="/game" component={Game} />
    <Route path="/gameover" component={GameOver} />
    <Route path="/" component={Main} />
  </Switch>
);
