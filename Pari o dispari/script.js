// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
let choose = prompt('Scegli: pari o dispari?');
console.log(choose)
let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
let cpuNumber = parseInt(Math.floor(Math.random()*5 + 1 ));
let sum = (userNumber + cpuNumber);

console.log(userNumber, cpuNumber);

function sumChecker(){
    if(sum % 2 != 0){
        sum == 'pari';
    }else{
        sum == 'dispari';
    }
    return sum;
}
console.log(sum)
