//Seleccionar boton 
const btnConfirm = document.getElementById("btnConfirm");

//Mensaje de invitacion aceptada
const msjConfirmacion = document.getElementById("msjConfirmacion");


//Mandar a la API que la invitación ha sido aceptada
btnConfirm.addEventListener("click", function () {
    this.disabled = true;

    const token = getToken();
    if (token == 'preview') {
        showMsgConfirmation();
        hideBtnConfirmation();
        return 0;
    }
    fetch(getApiURL() + token, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        //Mandar los datos 
        body: JSON.stringify({
            'token': token
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.status == 200) {
                showMsgConfirmation();
                hideBtnConfirmation();
            }
        })
        .catch(error => console.error(error));
});

