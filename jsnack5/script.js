//Creazione di variabili iniziali

let UserStringNumbers = [];
let UserEvenNumbers = [];
let UserOddNumbers = [];

//Prompt per chiedere all'utente i n numeri

for (let i = 1; i <= 6; i++) {

    UserStringNumbers.push(prompt("Inserisca un numero"));
};

//Trasformazione delle stringhe in numeri + aggiunta nell'array finale

for (let i = 0; i < UserStringNumbers.length; i++) {

    if (Number(UserStringNumbers[i]) % 2 == 0) {

        UserEvenNumbers.push(Number(UserStringNumbers[i]));

    } else { UserOddNumbers.push(Number(UserStringNumbers[i])) };

};

console.log("I numeri pari da lei imessi sono: " + UserEvenNumbers);
console.log("I numeri dispari da lei imessi sono: " + UserOddNumbers);