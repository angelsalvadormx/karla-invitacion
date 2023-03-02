const button = document.getElementById("button");

button.addEventListener('click', function(event) {
    event.preventDefault();
    //Get de information from the inputs
    const nombreFamilia = document.getElementById("nombreFamilia").value.trim();
    const cantBoletos = document.getElementById("cantBoletos").value.trim();
    if(nombreFamilia == '' || cantBoletos == '' ){
        showError(true,'Formulario incompleto')
        return 0;
    }
    this.innerHTML = 'test'
    // reset error msg 
    showError(false,'');
    
    //Collect the information into objects
    const data = {
        familia : nombreFamilia,
        boletos : cantBoletos
    };

    //Stringify the the data objects 
    const newData = JSON.stringify(data);
    //Convert data into hash
    const hash = CryptoJS.MD5(newData);

    const sendData = {
        data,
        token: String(hash)
    }

    const ApiURL = 'https://colxsoft.com/invitaciones/karla_ponce/api/';
    //const ApiURL = 'http://localhost:8080/api/';

    fetch(ApiURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    }).then(res => res.json())
    .then(response => {

        if(response.status == 200){
            showURL(hash);
            this.innerHTML = "Invitaci&oacute;n creada";
        }else{
            document.getElementById('sec-link-invitacion').style.opacity = 0;
            showError(true,response.message)
        }
    });

    return 0;
});

// button.addEventListener('mouseleave',function(){
//     this.innerHTML = "Crear invitaci&oacute;n";
// });


const showError = (show,msg)=>{
    const erormsg = document.getElementById('eror-msg'); 
    erormsg.style.opacity = show ? 1 : 0;
    erormsg.innerText = msg;
}

const showURL = (token) => {
    const urlSite = 'https://colxsoft.com/invitaciones/karla_ponce/';
    //show hash
    const url = urlSite + token;

    document.getElementById('link_invitacion').innerHTML = `invitaci&oacute;n/${token}`

    document.getElementById('sec-link-invitacion').style.opacity = 1;

    const button2 = document.getElementById("urlButton");

    button2.addEventListener('click', function(){  
        navigator.clipboard.writeText(url);
        this.innerText = "Copiada";
        document.getElementById('form').reset();
    });
    
    button2.addEventListener('mouseleave',function(){
        this.innerText = "Copiar";
    });
}