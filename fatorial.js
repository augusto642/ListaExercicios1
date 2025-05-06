
let numero= 5;

if (Number.isInteger(numero) && numero >= 0) {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  console.log(`Fatorial de ${numero}! = ${resultado}`);
} else {
  console.log("Entrada inválida: digite um inteiro não negativo.");
}
