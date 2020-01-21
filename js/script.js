// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati


$(document).ready(function() {

  var arrayNumeri = [];
  var userGuess = [];
  var numRandom;
  var numUserGuess;
  var repeatedNum = false;


  var i = 0;
  while (arrayNumeri.length < 5) {
    numRandom = getRandomInt(0, 101);
    if (arrayNumeri.includes(numRandom) == false) {
      arrayNumeri.push(numRandom);
      console.log(numRandom);
    }
    i++;
  }
  console.log(arrayNumeri);
  alert("Ricorda i seguenti numeri: " + arrayNumeri);

  setTimeout(function() {
    var i = 0;
    while (i < 5) {
      numUserGuess = parseInt(prompt("inserisci i numeri visualizzati in precedenza"));
      console.log(numUserGuess);
      if (userGuess.includes(numUserGuess) == true) {
        alert("hai già inserito questo numero");
        i--;
        numUserGuess;
      }
      else {
        for (var k = 0; k < arrayNumeri.length; k++) {
          if (numUserGuess == arrayNumeri[k]) {
            userGuess.push(numUserGuess);
          }
        }
      }
      i++;
    }
    alert("Hai indovinato i " + userGuess.length + " seguenti numeri:  " + userGuess)
    console.log(userGuess)
  }, 3000)

});




// funzione che genera un numero random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
