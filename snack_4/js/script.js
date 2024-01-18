// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

let teams = [
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 10,
    },
    {
        name: "Roma",
        points: 0,
        fouls: 0,   
    }
  ];
  


// creo funzione per generare un numero random 

const getRandomNumber = (min, max) => Math.floor(Math.random()*(max-min+1))+min

// Assegno a points e fouls un valore generato dalla funzione getRandomNumber

teams.forEach( team => {
    team.points = getRandomNumber(0,100);
    team.fouls = getRandomNumber(0,100)
});

const newTeamArray = teams.map( ({name, fouls}) => ({name, fouls}))

console.log(newTeamArray)








