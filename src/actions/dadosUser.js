export const DADOS_USER = 'DADOS_USER';

const receiveDadosUser = (name, email) => ({
  type: DADOS_USER,
  name,
  email,
});

export const dadosUser = (name, email) => (
  (dispatch) => dispatch(receiveDadosUser(name, email))
);
