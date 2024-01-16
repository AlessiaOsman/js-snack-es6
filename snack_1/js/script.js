/* Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. 
Ci ha lasciato il nome del tavolo e la lista degli invitati in ordine di posto.


Per stampare il tutto, la tipografia vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: 
nome del tavolo, nome dell'ospite e posto occupato. 
Generiamo questo array in una variabile guestsList e stampiamolo in console*/

// Creo variabile per il nome del tavolo

const tableName = 'Tavolo Vip'

// Creo Array per la lista degli invitati

const guests = [ 
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin' 
];

/* in cui ogni ospite sia un oggetto javascript che ha come attributi: 
    nome del tavolo, nome dell'ospite e posto occupato. */

const guestList = guests.map((guest, i) => { 
    return {Nome: guest, Tavolo: tableName, Posto: i}
})

console.log(guestList)