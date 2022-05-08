let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero1");
let numero3 = document.getElementById("numero3");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click"), () => {
  
  let numero1: number = (dato1.value);
  let numero2: number = (dato2.value);
  let numero3: number = (dato3.value);
  
  if (numero1 > numero2&&numero1 > numero3)  {
     console.log("El numero" +numero1+ "es el mayor");
    }else if (numero2 > numero1&&numero2 > numero3) {
      console.log("El numero" +numero2+"es el mayor");
      }else if (numero3 > numero1&&numero3 > numero2) {
      console.log("El numero"+numero3+"es el mayor");
    }
}
);

