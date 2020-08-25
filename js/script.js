/*  Chiedere all’utente il cognome
    inserirlo in un array con altri cognomi:
    ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
    stampa la lista ordinata alfabeticamente
    scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/

// 1. Creo un array contenente i cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(cognomi);
// 2. Chiedo all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log(cognomeUtente);

// 3. Inserisco il cognome dell'utente nell'array
cognomi.push(cognomeUtente);
console.log(cognomi);

// 4. Ordino l'array in ordine alfabetico
cognomi.sort();
console.log(cognomi);

// 5. Stampo la lista ordinata
for (var i = 0; i < cognomi.length; i++) {
  console.log(cognomi[i]);
}

// 6. Scrivo la posizione del cognome dell'utente all'interno della lista
var posizioneCognomeUtente = cognomi.indexOf(cognomeUtente) + 1;
console.log("La posizione del cognome utente è: " + posizioneCognomeUtente);
