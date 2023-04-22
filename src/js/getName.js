//Obtener URL invitacion
//let url = window.location.href

//Esta URL es para prueba, se debería borrar la siguiente linea y dejar sólamente la de arriba
const url = "https://colxsoft.com/invitaciones/karla_ponce/eed8931d8a4bfac73b2d657c26fd8522"
// f6dcc3acfffa94884d44ce4343426991
// eed8931d8a4bfac73b2d657c26fd8522

//Dividir la URL en un Array que se separa por cada diagonal
const urlSplit = url.split("/");

//Obtener token seleccionando última posicion en Array
let token = urlSplit.at(-1);

//Obtener URL sin /api/{token}
let urlSinApi = urlSplit.slice(0,5);
urlSinApi = urlSinApi.join("/");
console.log(token);
//Regresar API
let API = (urlSinApi + "/api/" + token);
console.log(API);

//Consulta a la API para regresar el nombre de la familia
fetch(API)
  .then(response => response.json())
  .then(({data,aceptado}) => {
    console.log(data,aceptado);
    const msjConfirmacion = document.getElementById("msjConfirmacion");
    const btnConfirm = document.getElementById('btnConfirm');
    console.log(msjConfirmacion);
    if(aceptado == true){
      msjConfirmacion.classList.remove('displayNone');
      msjConfirmacion.classList.add('showElement');
      btnConfirm.classList.add('displayNone');
    }

    const {familia,boletos} = data;

    const familiaElement = document.getElementById("familia");
    const boletosElement = document.getElementById("boletos");
    familiaElement.innerText = familia;
    boletosElement.innerText = boletos + " Boletos"; 
  })
  .catch(error => console.error(error));
