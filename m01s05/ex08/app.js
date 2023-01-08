const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');
const query = document.getElementById('query');

function clickHandler() {
  alert('Ai apasat butonul!');
}
// doc = obiect getelem = proprietate a ob/metoda
button.addEventListener('click', clickHandler);

// Folosind codul de la exercitiul 08,
// numeste functia care ruleaza la click clickHandler
// si foloseste-i numele ca parametru al metodei
// addEventListener in locul celei anonime.

// Adauga un buton pe care scrie Elimina Evenimentul.

// La click pe acest buton nou, foloseste metoda
// removeEventListener al variabilei button si
// foloseste numele clickHandler ca parametru.

removeEventButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

// Adauga un buton nou in document cu id-ul query si
// folosind addEventListener() ataseaza un eveniment
// care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.

query.addEventListener('click', () => {
  const age = prompt('Ce varsta ai?');
  console.log(`Varsta ta e: ${age} ani.`);
});

// Salveaza rezultatul metodei prompt intr-o variabila si afiseaza
// in consola folosind template strings: “Ai aa ani.”.

// Creaza un paragraf cu idul message si folosind
// getElementById(‘message’) stocheaza elementul
// intr-o variabila (paragraphElement), apoi folosind
// innerText, afiseaza mesajul de mai devreme in acest paragraf.

const paragraphElement = document.getElementById('message');
const message = paragraphElement.innerText;
console.log(message);
