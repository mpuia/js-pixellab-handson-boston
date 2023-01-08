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

console.warn(`Folosind obiectul person si un for, afiseaza in consola
skillurile de pe pozitiile pare ale arrayului.
`);
for (var i = 0; i < person.skills.length; ++i) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(` In mod similar, afiseaza skillurile care NU incep cu j.
`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') !== true) {
    console.log(skill);
  }
}

console.warn(` Folosind un for afiseaza propozitia:
"Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  // message = message +
  message += `${friend.name} ${friend.surname}${punctuation}`;
}
console.log(message);

console.warn(`
Folosind un for, afiseaza numarul total de ani
pe care il au persoanele din arrayul friends, doar daca varsta
este mai mare sau egala cu 30 de ani.
`);
var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;

  if (friendAge >= 30) {
    sumAge += friendAge;
  }
}
console.log(sumAge.toString());

console.warn(` Folosind un for, afiseaza suma anilor de nastere a persoanelor.
`);
var currentYear = new Date().getFullYear();
for (var i = 0; i < person.friends.length; i++) {
  var friendYear = currentYear - person.friends[i].age;
}
console.log(friendYear);

// aici how? friendYear nu e variabila care
// contine suma anilor de nastere pe are i-am
// obitnut scazand din currentYear varsta fiecaruia?

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii
din arrayul friends doar daca aceasta este mai mare de 2 ani.
`);

for (var i = 0; i < person.friends.length; i++) {
  var diffAge = person.age - person.friends[i].age;
  if (diffAge > 2) {
    console.log(diffAge);
  }
}
// pe asta nu mi-o arata in consola

console.warn(` Afiseaza fraza: "Intre Dragos si Larry este
o diferenta de xx ani. Intre Dragos si Steven... ",
doar daca varsta prietenului este impara.
`);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diff = Math.abs(person.age - friend.age);

  if (friend.age % 2 === 0) {
    continue;
  }

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}
console.log(message.trim());

console.warn(` Folosind proprietatea length a arrayului skills si o bucla for,
afiseaza in ordine inversa elementele arrayului skills.
Atentie, va trebui sa numeri invers, de la length la 0.
`);

// scoatem undefined cu -1

for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(`
Folosind obiectul person si un for,
afiseaza in consola skillurile pe care le are persoana
`);
for (var i = 0; i < person.friends.length; i++) {
  var skill = person.skills[i];
  console.log(skill);
}

console.warn(`
In mod similar, afiseaza skillurile care incep cu c
`);

for (var i = 0; i < person.friends.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('c') == true) {
    console.log(skill);
  }
}

console.warn(`
Folosind un for afiseaza propozitia:
"Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."
`);

var message = 'Numele de familie ale prietenilor mei sunt: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message += `${friend.surname}${punctuation}`;
}
console.log(message);

console.warn(`
Folosind un for, afiseaza numarul total de ani
pe care il au persoanele din arrayul friends
`);

for (var i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;
}
console.log((sumAge + friendAge).toString());

console.warn(`
Afiseaza diferenta de varsta dintre
persoana si prietenii din arrayul friends.
`);

for (var i = 0; i < person.friends.length; i++) {
  var diffAge = person.age - person.friends[i].age;
  console.log(Math.abs(diffAge));
}

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry
este o diferenta de xx ani.
Intre Dragos si Steven... ".
Repeta pentru tot arrayul friends.
`);

var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diffAge = Math.abs(person.age - friend.age);
  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diffAge} ani. `;
}
console.log(message.trim());

console.warn(`
Afiseaza fraza “Prietenii mei sunt:
xxx yyy, xxx yyy, xxx yyy.” in ordine
inversa a arrayului de prieteni.
(Numarand de la length la 0).
`);

var message = 'Prietenii mei sunt: ';
for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 3) {
    punctuation = '.';
  }
  message += `${friend.name} ${friend.surname}${punctuation}`;
}
console.log(message);
