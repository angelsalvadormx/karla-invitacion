
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

// const body = ;
const colxsoftInfo = document.getElementById('colxsoftInfo');

const startApp = () => {
  const mainColxsoftInfo = document.getElementById('mainColxsoftInfo');
  mainColxsoftInfo.classList.add('start');
}



const closeColxsoftInfo = ()=> {
  setTimeout(()=>{
    // document.getElementsByTagName('body')[0].classList.remove("overflowHidden");
    colxsoftInfo.classList.add('hide');
    removeClass('loading');
  },1500)
}

const removeClass = (className) => {
  const element = document.getElementsByClassName(className)[0];
  element.classList.remove(className);
}

const addTextColxsoftInfo = (text) => {
  const msgApi = document.getElementById('msg-api');
  msgApi.innerText = text;
  msgApi.classList.add('show');
}