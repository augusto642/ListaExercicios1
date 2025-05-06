
let a = 0;
let b = 1;

console.log(a);
console.log(b);


for (let i = 2; i < 10; i++) {
  let next = a + b;  
  console.log(next);  
  a = b;              
  b = next;           
}
