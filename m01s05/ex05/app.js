const person = {
  getName: function () {
    return 'Malina Laura';
  },
  getAge: function () {
    return 27;
  },
};

const currentYear = new Date().getFullYear();

console.warn(`
Afiseaza primul nume al persoanei folosind metoda getName()
`);

console.log(person.getName().split(' ')[0]);
// prin [0] apelam prima pozitie, split cu spatiu desparte getName la spatiu

console.warn(`Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.
`);

console.log(currentYear - person.getAge());

console.warn(`
Afiseaza ultimele doua cifre al anului de nastere al persoanei,
folosind anul curent si metoda getAge(). (Exemplu: '87).
`);

const fullBirthYear = currentYear - person.getAge();
const abbreviatedYear = fullBirthYear.toString().slice(-2);
console.log(`'${abbreviatedYear}`);
// de retinut!! - pt ultimele 2 caractere cu functia '.slice()'
// ex: 'dragos eu'.slice(-2) => 'eu'
// ex2: 'dragos eu'.slice(0, 2) => 'dr'

console.warn(`
Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);

console.warn(`
Afiseaza numele intreg al persoanei folosind metoda getName()
`);
console.log(person.getName());

console.warn(`
Afiseaza varsta persoanei folosind metoda getAge()
`);
console.warn(person.getAge());

console.warn(`
Afiseaza anul de nastere al persoanei, intr-o propozitie de felul
“M-am nascut in aaaa.”
`);
console.log(`M-am nascut in ${fullBirthYear}.`);

console.warn(`
Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”
`);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} ani in anul ${fullBirthYear}!`,
);
