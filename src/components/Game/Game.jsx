/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Game.scss';

import { Scores } from '../Scores';
import { AnswerList } from '../AnswerList';
import questions from '../../api/questions.json';
import scores from '../../api/scores.json';

export const Game = () => {
  const [id, setId] = useState(1);
  const [counter, setCounter] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [totalScore, setTotalScore] = useState('$0');

  const handleQuestion = (questionId, correct) => {
    if (selectedAnswer === correct) {
      setId(questionId + 1);
      setIsButtonVisible(false);
      scoreCounter();
    } else {
      setIsCorrectAnswer(false);
    }
  };

  const checkAnswer = (usersAnswer) => {
    setSelectedAnswer(usersAnswer);
    setIsButtonVisible(true);
  };

  const scoreCounter = () => {
    setCounter(counter + 1);

    scores.some((score) => {
      if (id === score.id) {
        return setTotalScore(score.score);
      }

      return null;
    });
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
                className={isButtonVisible
                  ? 'body__question-btn--visible'
                  : 'body__question-btn'
                }
                onClick={() => handleQuestion(question.id, question.correct)}
              >
                Submit
              </button>
              <div className="body__list list">
                {question.content.map(answer => (
                  <AnswerList
                    answer={answer}
                    checkAnswer={checkAnswer}
                    selectedAnswer={selectedAnswer}
                  />
                ))}
              </div>
            </>
          )
        ))}
      </div>

      <Scores counter={counter} />

      {(counter > 11 || !isCorrectAnswer) && (
        <Redirect to={`gameover/:${totalScore}`} />
      )}
    </div>
  );
};
