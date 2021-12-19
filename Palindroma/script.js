// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let word = prompt ('inserisci una parola'); //faccio inserire all'utente una parola
let splittedWord = word.split (''); //applicando il metodo .split divido le lettere di una parola e le inserisco all'interno di una array con (''), questo array conterrà le singole lettere divise in "sottostringhe"

console.log(splittedWord) //verifico il corretto funzionamento
let revertedWord = splittedWord.reverse (); //utilizzo quindi il metodo reverse per invertire l'ordine delle stringhe contenute nell'array
console.log(revertedWord)

let invertedWord = revertedWord.join(''); //utilizzo il metodo .join() per riunire le sottostringhe in una nuova stringa
console.log(invertedWord)

if(invertedWord == word){
    console.log('La parola ' + word +' è una parola palindroma: ' + invertedWord)
}else{
    console.log('La parola ' + word +' NON è una parola palindroma: ' + invertedWord)
}

