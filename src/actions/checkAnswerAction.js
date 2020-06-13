export const CHECKED_ANSWER = 'CHECKED_ANSWER';

export const checkAnswerAction = (points) => ({
  type: CHECKED_ANSWER,
  points,
});
