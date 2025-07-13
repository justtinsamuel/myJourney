// /*
// 3 cara declare function

// 1. function declare:
// function hello(){
//     return..
// }

// 2. function expression:
// const hello = function (){
//     return..
// }

// 3. function arrow:
// const hello = () => {
//     return
// }

// function arrow, kekurangan:
//     1.

// */

// // Hoisting = deklarasi variable dan function (arrow function gak bisa hoisting). Harus declare before buat code apapun dulu, biar lebih clean.
// hello();

// function hello(){
//     console.log('hello world');
// }

// x = 11;
// console.log(x);
// let x = 10;

// y = 11;
// console.log(x);
// var y = 10;

// // console.log(navigator.userAgent);

// // normal function
// function total(a,b){
//     return a + b;
// }

// // arrow function
// const totall = (a,b) => a + b; // default nya return.

// // result nya sama 3
// console.log(total(1,2));
// console.log(totall(1,2));

// // High order function atau built-in function.

// // forEach()
// // versi manual
// let numbers = [1, 2, 3];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// console.log("\n");

// // versi forEach()
// let angka = [1, 2, 3];

// angka.forEach((element) => {
//   console.log(element);
// });
// console.log("\n");

// // versi forEach() misal butuh index nya juga.
// angka.forEach((element, idx) => {
//   console.log(`index ke ${idx} adalah ${element}`);
// });

// // contoh object di dalam array
// const product = [
//   { name: "dennim", price: 150000 },
//   { name: "jacket", price: 210000 },
//   { name: "shoes", price: 220000 },
// ];

// product.forEach((element, idx) => {
//   const hargaFormat = element.price.toLocaleString("id-ID", {
//     style: "currency",
//     currency: "IDR",
//   });

//   console.log(`${idx + 1}. Untuk ${element.name} harganya ${hargaFormat}`);
// });

// filter angka genap
const number = [1, 2, 3, 4, 5];
const angkaGenap = number.filter((element) => element % 2 === 0);
const angkaUnder3 = number.filter((element) => element < 3);

console.log(angkaGenap);
console.log(angkaUnder3);

