let word_1 = prompt("Didgiti la prima parola");
let word_2 = prompt("Digiti la seconda parola");

let length_1 = word_1.length;
let length_2 = word_2.length;

if(length_1 > length_2){

    console.log(
    `
        La parola più corta è: ${word_2}
    
        La parola più lunga è: ${word_1}

    `);
} else if (length_1 < length_2){

    console.log(
        `
        La parola più corta è: ${word_1}
        
        La parola più lunga è: ${word_2}
    
        `);
} else {

    console.log("Le parole da lei scelte ("+ word_1 +" e "+ word_2 +") sono di uguale lunghezza!");

};