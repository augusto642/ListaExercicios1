let numero = 27;

// Verifica se é um inteiro
if (Number.isInteger(numero) && numero >= 0) {                // :contentReference[oaicite:0]{index=0}
  // Loop for: de 1 até 10, exibindo "numero" a cada iteração
  for (let i = 1; i <= 10; i++) {                             // :contentReference[oaicite:1]{index=1}
    console.log(i, numero);
  }
} else {
  console.log("Entrada inválida. Por favor, digite um número inteiro.");
}
