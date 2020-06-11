const url = 'https://opentdb.com/api_category.php';

const getAPI = () => (
  fetch(`${url}`)
    .then((resp) => (
      resp
        .json()
        .then((json) => (resp.ok ? Promise.resolve(json) : Promise.reject(json)))
    )));


export default getAPI;
