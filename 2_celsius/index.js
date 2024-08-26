function celsiusAFahrenheit() {
  let grados = parseInt(document.getElementById("grados").value);

  alert(
    `${grados} grados celsius son ${(grados * 9) / 5 + 32} grados Fahrenheit`
  );

  return (grados * 9) / 5 + 32;
}
