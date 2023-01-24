var person = {
  name: 'Malina',
  surname: 'Laura',
  age: 27,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
Folosind fisierele de la exercitiul 06,
si doua bucle for imbricate (nested)
afiseaza diferenta de varsta dintre fiecare
membru al arrayului friends si ceilalti membri.
`);

for (let i = 0; i < person.friends.length; i++) {
  const outerFriend = person.friends[i];

  for (let j = 0; j < person.friends.length; j++) {
    const innerFriend = person.friends[j];

    if (i === j) {
      continue;
    }

    console.log(
      `Intre ${outerFriend.name} si ${
        innerFriend.name
      } este o diferenta de ${Math.abs(
        outerFriend.age - innerFriend.age,
      )} ani.`,
    );
  }
}
