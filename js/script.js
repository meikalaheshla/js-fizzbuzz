// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// BONUS 1:
// Crea un elemento contenitore nel DOM e aggiungendo (attraverso il metodo append(), appendChild() o innerHTML) i vari elementi html con il numero o la stringa corretta da mostrare.
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

/*
let value = ''
for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0 && i % 3 === 0) {
        value += ' FizzBuzz'


    } else if (i % 5 === 0) {
        value += ' Buzz'


    } else if (i % 3 === 0) {
        value += ' Fizz'



    } else {

        value += ` ${i}`
    }
}
console.log(value)*/
// -------------------------------------------------------------------------------------------------------------------

// BONUS

const box = document.getElementById('contenitore')


let value = ''
for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0 && i % 3 === 0) {
        value += `<div class="col "><div class="bg-FizzBuzz"'> FizzBuzz</div></div>`



    } else if (i % 5 === 0) {
        value += `<div class="col "><div class="bg-Buzz"'> Buzz</div></div>`


    } else if (i % 3 === 0) {
        value += `<div class="col "><div class="bg-Fizz"'> Fizz</div></div>`



    } else {

        value += `<div class="col "><div class="bg-number"'> ${i}</div></div>`
    }
}
box.innerHTML = value
