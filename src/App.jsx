import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { Main } from './components/Main';
import { Game } from './components/Game';

export const App = () => (
  <Switch>
    <Route path="/game" component={Game} />
    <Route path="/" component={Main} />
  </Switch>
);
