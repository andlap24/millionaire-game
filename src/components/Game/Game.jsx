/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.scss';

import classNames from 'classnames';

import { Scores } from '../Scores';
import questions from '../../api/questions.json';

export const Game = () => {
  const [id, setId] = useState(1);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleQuestionId = (questionId, correctAnswer, userAnswer) => {
    // eslint-disable-next-line
    console.log(userAnswer);

    if (userAnswer === correctAnswer) {
      setId(questionId + 1);
      setIsAnswerCorrect(true);
    }
  };

  /* const toggleButtonStatus = (correctAnswer, userAnswer) => {
    if (userAnswer === correctAnswer) {
      return '--correct';
    }

    return '--wrong';
  }; */

  return (
    <div className="Game">
      <div className="Game__body body">
        {questions.map(question => (
          question.id === id && (
            <>
              <h3 key={question.id} className="body__question">
                {question.question}
              </h3>
              <div className="body__list list">
                {question.content.map(answer => (
                  <div
                    key={answer}
                    className={classNames(
                      answer === question.correct
                        ? 'list__option--correct'
                        : 'list__option--wrong',
                    )}
                    role="button"
                    onClick={() => (
                      handleQuestionId(
                        question.id,
                        question.correct,
                        answer,
                      )
                    )}
                  >
                    <p className="list__option-text">
                      <span>A: </span>
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
              {question.id > 12 && (
                <Link to="/gameover" />
              )}
            </>
          )
        ))}
      </div>
      <Scores isAnswerCorrect={isAnswerCorrect} />
    </div>
  );
};
