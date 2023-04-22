const baseURL = "http://localhost:8080/api";
const apiVersion = "/";

const getToken = () => {
  //Obtener URL invitacion
  const url = window.location.href
  
  //Dividir la URL en un Array que se separa por cada diagonal
  const urlSplit = url.split("/");
  
  //Obtener token seleccionando última posicion en Array
  const token = urlSplit.at(-1);

  
  return token;
}

const getApiURL = (apiName) => {
  return baseURL+apiVersion+apiName;
}