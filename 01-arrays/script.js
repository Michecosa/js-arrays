const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log('Quarto insegnante: '+fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = 'Patrick';
console.log('Nuovo quinto insegnante: '+teachers[4]);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log('Ultimo insegnante rimosso ('+lastTeacher+')');

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log('Primo insegnante rimosso ('+firstTeacher+')');

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
const newTeacher = teachers.push('Vanessa');
console.log('Nuovo insegnante aggiunto a fine array: '+teachers[teachers.length - 1]);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
const newTopTeacher = teachers.unshift('Sarah');
console.log('Nuovo insegnante aggiunto ad inizio array: '+teachers[0]);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log("L'insegnante Lewis si trova in posizione: "+lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log("L'array teachers è vuoto? "+isTeachersEmpty);