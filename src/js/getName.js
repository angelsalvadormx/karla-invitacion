//Obtener URL invitacion
//let url = window.location.href

//Esta URL es para prueba, se debería borrar la siguiente linea y dejar sólamente la de arriba
const url = "https://colxsoft.com/invitaciones/karla_ponce/f6dcc3acfffa94884d44ce4343426991"

//Dividir la URL en un Array que se separa por cada diagonal
const urlSplit = url.split("/");

//Obtener token seleccionando última posicion en Array
let token = urlSplit.at(-1);

//Obtener URL sin /api/{token}
let urlSinApi = urlSplit.slice(0,5);
urlSinApi = urlSinApi.join("/");

//Regresar API
let API = (urlSinApi + "/api/" + token);
console.log(API);

//Consulta a la API para regresar el nombre de la familia
fetch(API)
  .then(response => response.json())
  .then(data => {
    const familia = data.data.familia;
    const familiaElement = document.getElementById("familia");
    familiaElement.textContent = familia;

  })
  .catch(error => console.error(error));
