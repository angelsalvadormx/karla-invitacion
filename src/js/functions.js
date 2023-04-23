
// Show message
const showMsgConfirmation = () => {
  const msjConfirmacion = document.getElementById("msjConfirmacion");
  msjConfirmacion.classList.remove('displayNone');
  msjConfirmacion.classList.add('showElement');
}

// Ocultar boton confirmar
const hideBtnConfirmation = () => {
  const btnConfirm = document.getElementById('btnConfirm');
  btnConfirm.classList.add('displayNone');
}

const body = document.getElementsByTagName('body')[0];
const startApp = () => {
  const mainColxsoftInfo = document.getElementById('mainColxsoftInfo');
  mainColxsoftInfo.classList.add('start');
  body.style.overflow = "hidden";
}



const closeColxsoftInfo = ()=> {
  setTimeout(function(){
    const colxsoftInfo = document.getElementById('colxsoftInfo');
    colxsoftInfo.classList.add('hide');
    setTimeout(()=>{
      colxsoftInfo.classList.add('z-index-3');
    },400)
    body.style.overflow = "initial";
  },1500)
}

const addTextColxsoftInfo = (text) => {
  const msgApi = document.getElementById('msg-api');
  msgApi.innerText = text;
  msgApi.classList.add('show');
}