let A = 5;
let B = 4;
let C = 3;


if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Triângulo Equilátero");
  } else if (A === B || A === C || B === C) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Não forma um triângulo");
}
