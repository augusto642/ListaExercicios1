
console.log(
  "Menu interativo\n" +
  "1 – Mensagem\n" +
  "2 – Data\n" +
  "3 – Sair"
);

let opcao = 0;

// Avalia a opção usando switch…case
switch (opcao) {
  case 1:
    console.log("Hello World!");             // Opção 1 → mensagem
    break;
  case 2:
    console.log("Data de hoje é:", new Date().toLocaleString());  // Opção 2 → data e hora atual
    break;
  case 3:
    console.log("Programa encerrado.");      // Opção 3 → sair
    break;
  default:
    console.log("Opção inválida.");          // Qualquer outro valor
}
