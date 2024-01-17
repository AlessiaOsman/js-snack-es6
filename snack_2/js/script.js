/* Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3. dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);*/

// Creo una lista di oggetti per gli studenti

const students = [
    {
        Id: 213,
        Name: 'Marco della Rovere',
        Grades: 78,
    },
    {
        Id: 110,
        Name: 'Paola Cortellessa',
        Grades: 96,
    },
    {
        Id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48,
    },
    {
        Id: 145,
        Name: 'Gaia Borromini',
        Grades: 74,
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello',
        Grades: 68,
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades: 50,
    },
    {
        Id: 120,
        Name: 'Francesca da Polenta',
        Grades: 84,
    },
];

// Creo una nuova lista di studenti con totale di voti maggiore a 70

const betterStudents = students.filter(({Grades}) => Grades > 70)
console.log(betterStudents)

// Creo una lista degli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const betterStudentsId = betterStudents.filter( Id => Id > 120)
console.log(betterStudentsId)

// Recupero elemento html

const studentList = document.getElementById('student-list')

// Per ogni studente creo una targa con il nome in maiuscolo

item = ''

students.forEach((student) => item += `<li class="student-item">${student.Name}</li>`)

studentList.innerHTML = item


