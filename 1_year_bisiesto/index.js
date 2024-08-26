function esBisiesto() {
  // Obtener el valor del año desde el input
  let year = parseInt(document.getElementById("year").value);

  // Verificar si el año es bisiesto y mostrar el resultado
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(`El año ${year} es bisiesto.`);
  } else {
    alert(`El año ${year} no es bisiesto.`);
  }
}
