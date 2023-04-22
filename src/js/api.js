const baseURL = "http://localhost:8080/api";
const apiVersion = "/";

const getToken = () => {
  //Obtener URL invitacion
  const url = window.location.href

  //Dividir la URL en un Array que se separa por cada diagonal
  const urlSplit = url.split("/");

  //Obtener token seleccionando última posicion en Array
  let token = urlSplit.at(-1);
  if (token.length == 0) {
    // simulate token
    token = '6d3a1ba66c848eab48cff56a2ea2681d';
  }

  return token;
}

const getApiURL = (apiName = '') => {
  return baseURL + apiVersion + apiName;
}