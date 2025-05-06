let numero = 2;;
if (Number.isInteger(numero) && numero > 0) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par.`);
    } else {
        console.log(`${numero} é ímpar.`);
    }
} else {
    console.log('Número inválido.');
}
