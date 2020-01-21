// *Simon says*
// Un alert espone 5 numeri casuali.
var arrayNumeri = [];
for (var i = 0; i <= 4; i++) {
arrayNumeri.push(getRandomInt(0, 101));
}
console.log(arrayNumeri);
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
