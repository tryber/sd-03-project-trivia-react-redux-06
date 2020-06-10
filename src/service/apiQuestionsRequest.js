
const apiQuestionRequest = (token) => {
  const URL = `https://opentdb.com/api.php?amount=${5}&token=${token}`;
  return fetch(URL).then((response) => (
    response.json()
      .then((questions) => (response.ok ? Promise.resolve(questions) : Promise.reject(questions)))
  ));
};

export default apiQuestionRequest;
