const token = getToken();
const apiUrl = getApiURL() + token;

const loadData = (response) => {
  const { aceptado, data } = response;
  if (aceptado == true) {
    showMsgConfirmation();
    hideBtnConfirmation();
  }

  const { familia, boletos } = data;
  const familiaElement = document.getElementById("familia");
  const boletosElement = document.getElementById("boletos");
  familiaElement.innerText = familia;
  boletosElement.innerText = boletos + " Boletos";

  closeColxsoftInfo();
}

if (token == 'preview') {
  const response = {
    aceptado: false,
    data: {
      familia: 'Castañeda Mancilla',
      boletos: 5
    }
  }
  loadData(response);

} else {
  //Consulta a la API para regresar el nombre de la familia
  fetch(apiUrl)
    .then(response => response.json())
    .then((response) => {
      const { status } = response;
      if (status == 404 && preview != true) {
        addTextColxsoftInfo('Invitación no valida');
        return 0;
      }
      loadData(response);


    })
    .catch(error => {
      console.log(error)
    });
}


