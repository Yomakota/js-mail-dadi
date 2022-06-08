// Mail
// Chiedi all’utente la sua email,
// Controlla che sia nella lista di chi può accedere,
// Stampa un messaggio appropriato sull’esito del controllo.


// la lista di chi può accedere
const mails = ['diegobianchi@gmail.com', 'fabioverdi@gmail.com', 'paolomaldini@gmail.com', 'valentinorossi@gmail.com', 'reginaelisabetta@gmail.com', 'sergiomattarella@gmail.com', 'claudiobisio@gmail.com', 'renatosanchez@gmail.com', 'stephcurry@gmail.com' ];

//chiedo all'utente di inserire l'email
const mailUser = prompt('Inserisci la tua email');

// seleziono questo elemento nel DOM per inserire mio messaggio
let message = document.getElementById('message');

let mailFound = false;

//creo un ciclo for che controlla che sia nella lista di chi può accedere
for (let i = 0; i < mails.length; i++) {
//se un elemento del mio array è uguale all' email inserita dall'utente
    if (mailUser.toLowerCase() == mails[i].toLowerCase()) {
 // la variabile d'appoggio diventa true
        mailFound = true;
    }
};

// se l'email inserita è presente nella lista uscirà questo messaggio
if (mailFound) {
   message.innerHTML = 'Accesso corretto';
//    se l'email inserita non è presente nella lista uscirà questo messaggio
} else {
    message.innerHTML = 'Accesso negato';
};