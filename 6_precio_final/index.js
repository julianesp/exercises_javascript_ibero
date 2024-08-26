function calcularPrecioFinal() {
  let precioInicial = parseInt(document.getElementById("precioInicial").value);
  let descuento = parseInt(document.getElementById("descuento").value);

  const descuentoAplicado = (precioInicial * descuento) / 100;
  const precioFinal = precioInicial - descuentoAplicado;

  // return precioFinal;
  alert(`El precioFinal es de ${precioFinal}`);
}
