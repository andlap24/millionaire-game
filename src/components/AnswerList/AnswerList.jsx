/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const AnswerList = ({ answer, checkAnswer, selectedAnswer }) => (
  <div
    key={answer}
    className={classNames(
      selectedAnswer === answer
        ? 'list__option--selected'
        : 'list__option',
    )}
    role="button"
    onClick={() => checkAnswer(answer)}
  >
    <p className="list__option-text">
      <span>A: </span>
      {answer}
    </p>
  </div>
);

AnswerList.propTypes = {
  answer: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
};
