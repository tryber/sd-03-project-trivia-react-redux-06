import React from 'react';

const arrWithAllButtons = (objQuestion) => {
  const { incorrect_answers } = objQuestion
  const incorrectAnswersArr = incorrect_answers.map((e, index) => 
    (<button data-testid={`wrong-answer-${index}`}>{e}</button>));
  const allAnswers = [
  <button data-testid="correct-answer">{objQuestion.correct_answer}</button>,
  ...incorrectAnswersArr,
  ];
  return allAnswers;
}

const shuffleAnswers = (array) => {
  let currentIndex = array.length;
  let temporaryValue = [];
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const ShuffledButtons = (props) => {
  const { question } = props;
  return (
    <div>
      {shuffleAnswers(arrWithAllButtons(question)).map((e) =>
        (<div key={e.props.children}>{e}</div>))
      }
    </div>
  )
}

export default ShuffledButtons;
