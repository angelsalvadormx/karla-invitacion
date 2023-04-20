//Seleccionar boton 
const btnConfirm = document.getElementById("btnConfirm");

//Mensaje de invitacion aceptada
const msjConfirmacion = document.getElementById("msjConfirmacion");

//Mandar a la API que la invitación ha sido aceptada
btnConfirm.addEventListener("click", function() {
    fetch('https://colxsoft.com/invitaciones/karla_ponce/api/f6dcc3acfffa94884d44ce4343426991', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    //Mandar los datos 
    body: JSON.stringify({
        "aceptado": true 
        })
    })
    .then(response => response.json())
    .then(data => {
        //Mostrar mensaje
        msjConfirmacion.textContent = "La invitación ha sido aceptada";
        console.log(data);
    })
    .catch(error => console.error(error));
});

