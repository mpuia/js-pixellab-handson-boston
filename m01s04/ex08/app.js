var i = 0;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// }

console.warn(`
Modifica exemplul astfel incat bucla sa
numere de la 1 la 67.
`);

//

console.warn(`
Modifica exemplul astfel incat bucla
sa numere de la 1 la 66.
`);

// while (i <= 66) {
//   console.log(i);

//   i++;
// }

console.warn(`
Folosind keywordul break opreste bucla
atunci cand numarul este egal cu 12
(dar afiseaza-l).
`);

// while (i <= 66) {
//   console.log(i);

//   if (i === 12) {
//     i++;
//     break;
//   }

//   i++;
// }
//  *i++ se foloseste dupa break pt a continua numaratoarea

console.warn(`
Folosind keywordul continue afiseaza doar
numerele pare intre 1 si 32 (inclusiv).
`);

// while (i <= 32) {
//   if (i % 2 == 0) {
//     i++;
//     continue;
//   }

//   i++;
//   console.log(i);
// }

console.warn(`
Folosind metoda prompt de doua ori cere
utilizatorului un numar si o limita
superioara apoi afiseaza toti multiplii de
numar intre 5 si limita superioara introduse.
`);

var number = prompt('Please enter a number: ');
var higherNumber = prompt('Please enter higher number: ');

while (5 <= i <= higherNumber) {
  if (i % number === 0) {
    i++;
    continue;
  }
  i++;
  console.log(i);
}

// cum fac sa afiseze de la 5 in sus doar?
