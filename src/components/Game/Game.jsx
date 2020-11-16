import React from 'react';
import './Game.scss';

import { Scores } from '../Scores';
import { ReactComponent as Block } from '../../images/rectangle-border.svg';
/* import { questions } from '../../api/questions.json'; */

export const Game = () => (
  <div className="Game">
    <div className="Game__body body">
      <h3 className="body__question">
        How old your elder brother was 10 years before you was born, mate?
      </h3>
      <div className="body__list list">
        <div className="list__option">
          <Block />
          <div className="list__text">
            <span>A </span>
            10 years
          </div>
        </div>
        <div className="list__option">
          <Block />
          <div className="list__text">
            <span>A </span>
            10 years
          </div>
        </div>
        <div className="list__option">
          <Block />
          <div className="list__text">
            <span>A </span>
            10 years
          </div>
        </div>
        <div className="list__option">
          <Block />
          <div className="list__text">
            <span>A </span>
            10 years
          </div>
        </div>
      </div>
    </div>
    <div className="Game__scores scores">
      <Scores />
    </div>
  </div>
);
