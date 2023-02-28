const button = document.getElementById("button");

button.addEventListener('click', () => {
    //Get de information from the inputs
    let nombreFamilia = document.getElementById("nombreFamilia").value;
    let cantBoletos = document.getElementById("cantBoletos").value;

    //Collect the information into objects
    let data = {
        familia : nombreFamilia,
        boletos : cantBoletos
    };

    //Stringify the the data objects 
    let newData = JSON.stringify(data);
    
    //Convert data into hash
    var hash = CryptoJS.MD5(newData);

    //show hash
    let url=document.URL+hash;
    console.log(url);

    

    document.getElementById('texto').innerHTML = `Se ha generado la invitación con éxito: ${url}`


    let element = document.getElementById("urlButton");
    element.removeAttribute("hidden");


    const button2 = document.getElementById("urlButton");

    button2.addEventListener('click', () => {  
    });


});

