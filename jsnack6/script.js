let n = prompt("Qual è il numero massimo consenito da generare?")

let random_number = parseInt(Math.random() * n);

let user_number = prompt("Quale pensa sia il numero generato casualmente?");

if (user_number == random_number) {
    console.log("Congratulazioni, ha indovinato!!!");
} else {
    console.log("Ci dispiace, non ha indovinato! Il numero era: " + random_number);
};