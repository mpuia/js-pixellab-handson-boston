var person = {
  firstName: 'Sponge',
  lastName: 'Bob',
  email: 'spongethebob@seamail.com',
  birthYear: 2007,
  pets: [
    {
      name: 'Patrick',
      species: 'starfish',
      age: 26,
    },
    {
      name: 'Squidward',
      species: 'squid',
      age: 25,
    },
    {
      name: 'Sandy',
      species: 'squirrel',
      age: 27,
    },
  ],
  zipCode: 'bikinibottoms',
};

var year = 2022;

console.warn(`Afiseaza propozitia:
“Numele meu este: xxx yyy si am x animale.”.
Nu uita de proprietatea length a arrayului pets.
`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia:
“Am acelasi email din copilarie: xxx.”.
`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`Afiseaza propozitia:
“Unul din cele x animale ale mele
este species si are age ani.”
`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species.toString() +
    ' si are ' +
    person.pets[1].age.toString() +
    ' ani.',
);

console.warn(`Calculeaza si afiseaza (folosind anul curent)
anul de nastere al animalului de pe pozitia 2.
`);
console.log((year - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila
difference diferenta de ani dintre persoana si animalul
de pe pozitia 0 si afiseaza aceasta diferenta.
Foloseste anul curent. `);
console.log((year - person.birthYear - person.pets[0].age).toString());

console.warn(`Afiseaza propozitia: “Intre firstName si
petName este o diferenta de difference ani.”.
`);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    (year - person.birthYear - person.pets[0].age).toString() +
    ' ani.',
);

console.warn(`Folosind metoda document.getElementById()
afiseaza urmatoarele 5 afirmatii despre obiectul person. `);
// aici no entiendo ce trebuie sa fac

var hobbies = document.getElementById('prop01');
var education = document.getElementById('prop02');
var music = document.getElementById('prop03');
var sports = document.getElementById('prop04');

console.warn(`Afiseaza propozitia
“ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
`);
console.log(
  person.firstName +
    ', ' +
    person.pets[0].name +
    ', ' +
    person.pets[1].name +
    ', ' +
    person.pets[2].name +
    ' locuiesc toti in aceeasi casa.',
);

console.warn(`Calculeaza si afiseaza diferenta
de varsta dintre animalul de pe pozitia 0 si
cel de pe pozitia 2
`);
console.log(person.pets[0].age - person.pets[2].age);

console.warn(`Afiseaza propozitia: “Ma numesc xxx yyy,
m-am nascut in birthYear si codul meu postal este: zipCode”
`);
console.log(
  'Ma numesc ' +
    person.firstName +
    person.lastName +
    ', m-am nascut in ' +
    person.birthYear +
    ' si codul meu postal este: ' +
    person.zipCode +
    '.',
);

console.warn(`Afiseaza propozitia: “Animalele mele
s-au nascut in xxxx, xxx, respectiv xxx.”
Foloseste anul curent pentru a efectua scaderea.
`);
console.log(
  'Animalele mele s-au nascut in ' +
    (`${year}` - person.pets[0].age) +
    ', ' +
    (`${year}` - person.pets[1].age) +
    ', respectiv ' +
    (`${year}` - person.pets[2].age) +
    '.',
);
