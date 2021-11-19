// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
let userKm = parseInt(prompt('Quanti chilometri desideri percorrere?'));
console.log('Chilometri scelti ' + userKm);
let userAge = parseInt(prompt('Inserisci la tua età:'));
console.log('Età passegero ' + userAge);
// il prezzo del biglietto è definito in base ai km(0.21 € al km) 
const tariffa = 0.21;
let ticket = parseFloat(userKm * tariffa);
console.log('La tariffa è di ' + ticket);
// va applicato uno sconto del 20 % per i minorenni
if (userAge < 18 ) {
    ticket = parseFloat((ticket * 20) / 100);
    ticket = ticket.toFixed(2);
    console.log('Il prezzo scontato è di ' + ticket + '€');
}
// va applicato uno sconto del 40 % per gli over 65.
if (userAge > 65) {
    ticket = ((ticket * 40) / 100);
    ticket= ticket.toFixed(2);
    console.log('Il prezzo scontato è di ' + ticket + '€');
}
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
