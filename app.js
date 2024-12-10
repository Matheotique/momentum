console.log("hello world");

// Date.now(2)
// var heureMinutesSeconde = Date.now(2);
let dateDuJour = new Date();
console.log(dateDuJour);

let hours = dateDuJour.getHours();
console.log(hours + ' heure');

let minutes = dateDuJour.getMinutes();
console.log(minutes + ' minute');

// resultat: 10:53
console.log(hours + 'h' + minutes);

let year = dateDuJour.getFullYear();
console.log(year + ' année');
document.querySelector("#year").innerHTML = year;

let day = dateDuJour.getDay();
console.log(day + ' jour');

let month = dateDuJour.getMonth();
console.log(month + ' mois');

let jours = dateDuJour.getUTCDate();
console.log(jours + ' jours');


// resultat tuesday 26 december 2024
console.log(day + ' ' + jours + ' ' + month + ' ' + year);

let test = 3;