
const apiUrl = getApiURL() + getToken();
//Consulta a la API para regresar el nombre de la familia
fetch(apiUrl)
  .then(response => response.json())
  .then(({data,aceptado}) => {

    if(aceptado == true){
      showMsgConfirmation();
      hideBtnConfirmation();
    }

    const {familia,boletos} = data;
    const familiaElement = document.getElementById("familia");
    const boletosElement = document.getElementById("boletos");
    familiaElement.innerText = familia;
    boletosElement.innerText = boletos + " Boletos"; 
  })
  .catch(error => console.error(error));
