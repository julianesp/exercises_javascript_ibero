function calcularAreaTriangulo() {
  let base = parseInt(document.getElementById("base").value);
  let altura = parseInt(document.getElementById("altura").value);

  const area = (base * altura) / 2;
  // return area;
  alert(
    `El triángulo con base ${base} y altura ${altura} tiene un área de ${area}`
  );
}
