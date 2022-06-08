// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Genero due numeri random da 1 a 6
//sia per il giocatore
const userNum = Math.floor(Math.random() * 6) + 1;

// sia per il computer
const pcNum = Math.floor(Math.random() * 6) + 1;

// creo due variabili per interagire col DOM
const number = document.getElementById('number');
const result = document.getElementById('result');

//inserisco numeri estratti nel DOM
number.innerHTML = `I numeri sono: ${userNum} ${'per l\'utente e '} ${pcNum} ${'per il banco.'}`;

// Stabilire il vincitore, in base a chi fa il punteggio più alto e far uscire il risultato
// se è maggiore il numero dell'utente, utente ha vinto
if (userNum > pcNum) { 
    result.innerHTML = 'Hai vinto';
// se è maggiore il numero del computer, pc ha vinto
} else if (userNum < pcNum) {
   result.innerHTML = 'Banco vince';
// se sono uguali è pareggio
} else {
    result.innerHTML = 'Parità';
};