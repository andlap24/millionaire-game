/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Game.scss';

import { Scores } from '../Scores';
import questions from '../../api/questions.json';

export const Game = () => {
  const [id, setId] = useState(1);
  const [isInCorrect, setIsInCorrect] = useState(false);

  const handleQuestionId = (questionId, correctAnswer, userAnswer) => {
    // eslint-disable-next-line
    console.log(userAnswer);

    if (userAnswer === correctAnswer) {
      setId(questionId + 1);
    } else {
      displayWrongAnswer();
    }
  };

  const displayWrongAnswer = () => (
    setIsInCorrect(true)
  );

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
                    className="list__option"
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
              {isInCorrect && (
                <p>Wrong Answer</p>
              )}
            </>
          )
        ))}
      </div>
      <div className="Game__scores scores">
        <Scores />
      </div>
    </div>
  );
};
