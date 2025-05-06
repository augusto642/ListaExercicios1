let quantidadeMacas = 8;

if (Number.isInteger(quantidadeMacas) && quantidadeMacas > 0) {
  let precoUnitario;
  if (quantidadeMacas >= 12) {
    precoUnitario = 0.25;
  } else {
    precoUnitario = 0.30;
  }

  let total = quantidadeMacas * precoUnitario;
  console.log(`Total da compra: R$ ${total.toFixed(2)}`);
} else {
  console.log("Quantidade inválida.");
}
