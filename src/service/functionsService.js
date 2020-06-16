function playersInfosLocalStorage(assertions, score, name, gravatarEmail) {
  const state = {
    player: {
      name,
      assertions,
      score,
      gravatarEmail,
    },
  };
  localStorage.setItem('state', JSON.stringify(state));
}

export default playersInfosLocalStorage;
