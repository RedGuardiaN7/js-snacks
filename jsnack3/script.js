//Creazione di variabili iniziali

let UserStringNumbers = [];
let UserNumbers = []

//Prompt per chiedere all'utente i n numeri

for (let i = 1; i <= 10; i++) {

    UserStringNumbers.push(prompt("Inserisca un numero"))
};

//Trasformazione delle stringhe in numeri da poter utilizzare nella somma

for (let i = 0; i < UserStringNumbers.length; i++) {

    UserNumbers.push(Number(UserStringNumbers[i]));
};

//Somma dei numeri

let sum = UserNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue);

//Output della somma

console.log("La somma di tutti i numeri da lei scelti è: " + sum);