
const apiGravatarRequest = (hash) => {
  const URL = `https://www.gravatar.com/avatar/${hash}`;
  return fetch(URL).then((reponse) => (
    reponse.json()
      .then((picture) => (picture.ok ? Promise.resolve(picture) : Promise.reject(picture)))
  ));
};

export default apiGravatarRequest;
