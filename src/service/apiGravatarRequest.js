
const apiGravatarRequest = (hash) => {
  const URL = `https://www.gravatar.com/avatar/${hash}.json`;
  return fetch(URL).then(
    (picture) => (picture.ok ? Promise.resolve(picture) : Promise.reject(picture)),
  );
};

export default apiGravatarRequest;
