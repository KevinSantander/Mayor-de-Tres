let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let primerNumero = Number(data1.value);
  let segundoNumero = Number(data2.value);
  let tercerNumero = Number(data3.value);
  if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log(primerNumero + " es el mayor");
  } else {
    if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
      console.log(segundoNumero + " es el mayor");
    } else console.log(tercerNumero + " es el mayor");
  }
});
