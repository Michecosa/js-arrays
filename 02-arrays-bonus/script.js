const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.slice().reverse(); // Non modifico l'array originale (teachers)
console.log("Reversed teachers array: "+reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log("Teachers array with names of length >= 5: "+ longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const teachersWithoutEd = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] !== "Ed") {
    teachersWithoutEd.push(teachers[i]);
  }
}
console.log("Teachers array without Ed: "+ teachersWithoutEd);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    isFabioPresent = true;
    break; // smetti di controllare, tanto l’hai trovato
  }
}

console.log("Is Fabio present in the array? " + isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = "";

for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i];
  if (i < teachers.length - 1) {
    teachersString += ", ";
  }
}

console.log("Teachers string: " + teachersString);