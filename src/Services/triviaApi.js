const tokenURL = 'https://opentdb.com/api_token.php?command=request';
const questionsURL = 'https://opentdb.com/api.php?amount=5';

export const getQuestions = (token) => {
  return fetch(`${questionsURL}&token=${token}`)
    .then((resp) => (
      resp
        .json()
        .then((json) => (resp.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
};

export const gerarToken = () => (
  (
    fetch(tokenURL)
      .then((resp) => (
        resp
          .json()
          .then((json) => (resp.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then((data) => (data.token))
      )))
);
