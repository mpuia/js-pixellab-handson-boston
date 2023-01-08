console.warn(`
Creeaza o functie overloaded pentru c
alcularea suprafetelor numita calculateSurface.
Daca primeste un parametru, sa calculeze suprafata
unui patrat. Daca primeste doi, a unui dreptunghi.
Daca primeste trei, sa calculeze suprafata totala
a paralelipipedului. Foloseste structura switch.
`);

function calculateSurface(width, length, height) {
  switch (arguments.length) {
    case 'square':
      return width * width;
    case 'rectangle':
      return width * length;
    case 'parallelepiped':
      return 2 * ((width + length) * height + width * length);
  }
}
// de unde luam parametrii?

console.warn(`
Creeaza o functie numita calculateCircleArea()
si afiseaza suprafata unor cercuri cu raza de
2, 20 si 16.
`);
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`
Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului
si afiseaza propozitia: “Animalul meu are petAge ani”
`);

const pet = {
  name: 'Brutus',
  species: 'dog',
  age: 2,
  getName: function () {
    return this.name;
  },
  getSpecies: function () {
    return this.species;
  },
  getAge: function () {
    return this.age;
  },
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
