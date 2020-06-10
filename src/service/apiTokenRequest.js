const URL = 'https://opentdb.com/api_token.php?command=request';

const apiTokenRequest = () => fetch(URL).then((response) => (
  response.json()
    .then((token) => (response.ok ? Promise.resolve(token) : Promise.reject(token)))
));

export default apiTokenRequest;
