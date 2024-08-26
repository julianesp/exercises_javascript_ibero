// function convertirMinutos(minutos) {
function convertirMinutos() {
  let minutos = document.getElementById("minutos").value;

  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  // return `${horas} horas y ${minutosRestantes} minutos`;
  alert(`${minutos} minutos son ${horas} horas y ${minutosRestantes} minutos`);
}
