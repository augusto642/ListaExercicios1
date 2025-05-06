
let numero = 3;
if (Number.isInteger(numero) && (numero>=0)) {

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
} else {
  console.log("Entrada inválida: por favor insira um número inteiro.");
}
