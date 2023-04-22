
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