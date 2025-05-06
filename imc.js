let peso = 90;
let altura = 1.85;

let imc = peso / (altura * altura);
imc = imc.toFixed(2);

let categoria = "";

if (imc < 18.5) {
  categoria = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
  categoria = "Peso normal";
} else if (imc >= 25 && imc < 30) {
  categoria = "Sobrepeso";
} else {
  categoria = "Obesidade";
}

console.log(`Seu IMC é ${imc}. Categoria: ${categoria}.`);
