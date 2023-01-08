var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// do {
//   i++;
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// } while (i < 100);

console.warn(`
Modifica exemplul astfel incat bucla sa
numere de la 1 la 52
`);

// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

console.warn(`
Modifica exemplul astfel incat bucla
sa numere de la 1 la 51.
`);

// do {
//   console.log(i);
//   i++;
// } while (i <= 51);

console.warn(`
Folosind keywordul break opreste bucla
atunci cand numarul este egal cu 12
(dar afiseaza-l)
`);

// do {
//   i++;
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
// } while (i <= 52);

console.warn(`
Folosind keywordul continue afiseaza doar
numerele impare intre 8 si 32.
`);

// do {
//   console.log(i);
//   i++;

//   if (i % 2 == 0) {
//     i++;
//     continue;
//   }
// } while (i <= 32);

// try again

console.warn(`
Folosind metoda prompt de trei ori cere
utilizatorului un numar, o limita inferioara
si o limita superioara apoi afiseaza toti
multiplii de numar intre limita inferioara si
limita superioara introduse.
`);

var number = prompt('Please enter a number: ');
var lowerNumber = prompt('Please enter a lower number: ');
var higherNumber = prompt('Please enter a higher number: ');

do {
  console.log(i);
  i++;

  if (i % number !== 0) {
    i++;
    continue;
  }
} while (i < higherNumber);

// cum fac sa ia in considerare si limita de jos?
