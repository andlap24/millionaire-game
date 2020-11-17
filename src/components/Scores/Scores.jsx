import React from 'react';
import PropTypes from 'prop-types';
import './Scores.scss';

import scores from '../../api/scores.json';

export const Scores = ({ isAnswerCorrect }) => {
  const [totalScore, setTotalScore] = useState([]);

  const handleActiveScore = () => {
    if (isAnswerCorrect) {
      setTotalScore(1000);
    }
  };

  return (
    <div className="Game__scores scores">
      {scores.map(score => (
        <div className="scores__item">
          <div>{score}</div>
        </div>
      ))}
    </div>
  );
};

Scores.propTypes = {
  isAnswerCorrect: PropTypes.bool.isRequired,
};
