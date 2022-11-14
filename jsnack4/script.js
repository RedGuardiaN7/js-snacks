let guest_list = ["jay", "daisy", "myrtle", "jordan", "henry", "nick", "tom", "meyer", "george"];

let guest_name = prompt("Inserisca il suo nome");
let guest_name_lowercase = guest_name.toLocaleLowerCase();
let guest_name_final = guest_name.charAt(0).toUpperCase() + guest_name.slice(1);

if (guest_list.includes(guest_name_lowercase)) {
    console.log("Benvenuto/a, " + guest_name_final);
} else {
    console.log("Ci dispiace, non è sulla lista.");
};