/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';
import './Game.scss';

import { Scores } from '../Scores';
import { GameOver } from '../GameOver';
import questions from '../../api/questions.json';
import scores from '../../api/scores.json';

export const Game = () => {
  const [id, setId] = useState(1);
  const [counter, setCounter] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);
  const [
    buttonVisibility,
    setButtonVisibility,
  ] = useState('body__question-btn');
  const [totalScore, setTotalScore] = useState([]);

  const handleQuestion = (questionId, correct) => {
    if (selectedAnswer === correct) {
      setId(questionId + 1);
      scoreCounter();
    } else {
      setIsCorrectAnswer(false);
    }
  };

  const checkAnswer = (usersAnswer) => {
    setSelectedAnswer(usersAnswer);
    submitAnswer();
  };

  const submitAnswer = () => (
    setButtonVisibility('body__question-btn--visible')
  );

  const scoreCounter = () => {
    setCounter(counter + 1);
    scores.map(score => setTotalScore(
      counter === score.id
        ? score.score
        : '',
    ));
  };

  return (
    <div className="Game">
      <div className="Game__body body">
        {questions.map(question => (
          question.id === id && (
            <>
              <h3 key={question.id} className="body__question">
                {`${question.question} (${question.correct})`}
              </h3>
              <button
                type="button"
                className={buttonVisibility}
                onClick={() => handleQuestion(question.id, question.correct)}
              >
                Submit
              </button>
              <div className="body__list list">
                {question.content.map(answer => (
                  <div
                    key={answer}
                    className={classNames(
                      selectedAnswer === answer
                        ? 'list__option--selected'
                        : 'list__option',
                    )}
                    role="button"
                    onClick={() => (
                      checkAnswer(answer)
                    )}
                  >
                    <p className="list__option-text">
                      <span>A: </span>
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )
        ))}
      </div>
      <Scores counter={counter} />
      {(counter > 11 || !isCorrectAnswer) && (
        <Redirect to="/gameover">
          <GameOver totalScore={totalScore} />
        </Redirect>
      )}
    </div>
  );
};
