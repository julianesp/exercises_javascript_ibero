function estaEnRango() {
  let numero = parseInt(document.getElementById("numero").value);
  let inicio = parseInt(document.getElementById("inicio").value);
  let fin = parseInt(document.getElementById("fin").value);

  if (numero >= inicio && numero <= fin) {
    alert(`El número ${numero} está dentro del rango ${inicio} y ${fin}`);
  } else {
    alert(`El número ${numero} "NO" está dentro del rango ${inicio} y ${fin}`);
  }

  return;
}
