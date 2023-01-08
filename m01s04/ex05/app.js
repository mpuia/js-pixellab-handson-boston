var i;

// for (i = 0; i <= 100; i++) {
//   console.log(i);
//   console.log('Acest numar este multiplu de 7');
// }

// for (i = 0; i <= 100; i++) {
//   if (i % 7 == 0) {
//     console.log(i);
//     console.log('Acest numar este multiplu de 7');
//   }
// }

// var i = prompt('Care numar este multiplu de 7?');
// if (i % 7 == 0) {
//   console.log('Acest numar este multiplu de 7.');
// }

console.warn(`
Folosind metoda prompt cere utilizatorului
numarul pentru care trebuie sa gasesti
multipli si afiseaza mesajul: “Acest numar
este multiplu de x.” Afla multiplii pentru
acest numar intre 1 si 1000.
`);

console.warn(`
  Folosind inca o metoda prompt, cere utilizatorului si limita superioara
  pana la care sa numere bucla si sa afiseze multipli.
  `);

var number = prompt('Insereaza un numar: ');
var userInput = prompt('La ce numar ne oprim?');

for (var i = 1; i <= userInput; i++) {
  if (i % number === 0) {
    console.log(`${i} este multiplu de ${number}`);
  }
}
