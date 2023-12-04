// Descrizione:
// Scrivere un programma che chieda all'utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone.
// Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
// (modificato)

// const myButton = document.getElementById('special-button');


// myButton.addEventListener('click', function() {

//     const ageInput = document.getElementById('age');
//     const ageInputValue = parseInt(ageInput.value);

//     console.log('ageInput', ageInput);
//     console.log('ageInputValue', ageInputValue);

//     const kmInput = document.getElementById ('km');
//     const kmInputValue = parseInt (kmInput.value);
//     const result = document.querySelector('p');

//     let ticketPrice = (kmInputValue * 0.21);

// if (ageInput < 18) {
//     price = (ticketPrice * 0.8).toFixed(2);
// }

// else if(ageInputValue > 65){
//     price = (ticketPrice * 0.6).toFixed(2);
// }

// else{
//     price = ticketPrice.toFixed(2);
// }
//     document.getElementById('input-result').innerHTML += price
//     console.log('prezzo', price)

//     const nameInput = document.getElementById ('name');
//     nameInput.value = '';
//     ageInput.value = '';
// }
// );






const genera = document.getElementById('generatesButton');

genera.addEventListener('click',function() {

    const nameInput = document.getElementById('namesurname');
    console.log('nameInput.value',nameInput.value,typeof nameInput.value);

    document.getElementById('user').innerHTML = nameInput.value;

    const kmInput = parseInt(document.getElementById('distance').value);
    console.log('kmInput',kmInput,typeof kmInput)

    const bornInput = parseInt(document.getElementById('born').value)
    console.log('bornInput',bornInput,typeof bornInput)

    let priceKm = '0.21'

    let price = (priceKm * kmInput)
    console.log('price',price,typeof price)

    let age
    let currentTime = '2023'
    age = (currentTime - bornInput)
    console.log('age',age,typeof age)

    if (age < 18){
        price = (price * 0.8)
        console.log('Prezzo Minorenni',price,typeof price)
    }
    if (age > 65){
        price = (price * 0.6)
        console.log('Prezzo Over 65',price,typeof price)
    }

    let moneta = ('€');

    const pricePrint = price.toFixed(2) + ' ' + moneta;
    document.getElementById('final-Price').innerHTML = pricePrint;

});