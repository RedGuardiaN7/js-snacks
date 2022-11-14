let guest_list = ["Jay", "Daisy", "Myrtle", "Jordan", "Henry", "Nick", "Tom", "Meyer", "George"];

let guest_name = prompt("Inserisca il suo nome");

if (guest_list.includes(guest_name)) {
    console.log("Benvenuto/a, " + guest_name);
} else {
    console.log("Ci dispiace, non è sulla lista.");
};