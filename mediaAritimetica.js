let numeros = [2, 3, 1, 0, 4]; 
let soma = 0.0;
let cont = 0;
let i = 0;

while (i < numeros.length && numeros[i] !== 0) {
  soma += numeros[i]; 
  cont += 1;          
  i += 1;            
}

if (cont > 0) {
  let media = soma / cont;
  console.log(`Média aritmética: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum numero foi digitado");
}
