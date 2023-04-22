//Seleccionar boton 
const btnConfirm = document.getElementById("btnConfirm");

//Mensaje de invitacion aceptada
const msjConfirmacion = document.getElementById("msjConfirmacion");


//Mandar a la API que la invitación ha sido aceptada
btnConfirm.addEventListener("click", function() {
    
    const token = getToken();

        
    // '6d3a1ba66c848eab48cff56a2ea2681d';
    urlTest += token;
    const data = {
            'token': token 
        }
    console.log(data);
    console.log(JSON.stringify(data));
    fetch(urlTest, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    //Mandar los datos 
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.status == 200){

        //Mostrar mensaje
        const msjConfirmacion = document.getElementById("msjConfirmacion");
        msjConfirmacion.classList.remove('displayNone');
        msjConfirmacion.classList.add('showElement');

        // Ocultar boton confirmar
        const btnConfirm = document.getElementById('btnConfirm');
        btnConfirm.classList.add('displayNone');
    }

    })
    .catch(error => console.error(error));
});

