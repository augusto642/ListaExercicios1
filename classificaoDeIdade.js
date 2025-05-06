let idade = 18;

if (Number.isInteger(idade) && idade >= 0) {
  if (idade < 12) {
    console.log("Criança");
  } else if (idade < 18) {
    console.log("Adolescente");
  } else if (idade < 60) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
} else {
  console.log("Idade inválida.");
}
