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

//Numeri maggiori, minori e mediana

let smallest_number = Math.min(...UserNumbers);
let largest_number = Math.max(...UserNumbers);
let median = sum / UserNumbers.length;

//Output della somma

console.log("La somma di tutti i numeri da lei scelti è: " + sum);
console.log("Il numero maggiore tra quelli da lei scelti è: " + largest_number);
console.log("Il numero mminore tra quelli da lei scelti è: " + smallest_number);
console.log("La media dei numeri da lei scelti è: " + median);