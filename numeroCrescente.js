let A = 11;
let B = 2;

if (Number.isInteger(A) && Number.isInteger(B) && A > 0 && B > 0) {
  if (A < B) {
    console.log(A, B);
  } else {
    console.log(B, A);
  }
} else {
  console.log("Valores inválidos.");
}
