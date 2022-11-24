var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();
    var radius = inputRadius.value || 0;
    var result = 0;

    result = (4 / 3) * (Math.PI * Math.pow(radius, 3));

    elementResult.innerText = result;
  },
  false,
);
//  Rezultatul asteptat este 1436.7550402417319, dar formularul a calculat: 1436.755040241732.
