export const CHECKED_ANSWER = 'CHECKED_ANSWER';

export const checkAnswerAction = (points, assertions) => ({
  type: CHECKED_ANSWER,
  points,
  assertions,
});
