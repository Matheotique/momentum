console.log("hello world");

// Date.now(2)
// var heureMinutesSeconde = Date.now(2);5

const jourSemaine = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi' ]

const moisAnnee = [ 'décembre', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre' ] 


let dateDuJour = new Date();
console.log(dateDuJour);

let hours = dateDuJour.getHours();
console.log(hours + ' heure');
let minutes = dateDuJour.getMinutes();
document.querySelector("#hour").innerHTML = hours + " : " + minutes;

// resultat: 10:53
console.log(hours + 'h' + minutes);

let year = dateDuJour.getFullYear();
console.log(year + ' année');
document.querySelector("#year").innerHTML = year;

let day = dateDuJour.getDay();
document.querySelector("#day").innerHTML = day;

let month = dateDuJour.getMonth();
console.log(month + ' mois');
document.querySelector("#month").innerHTML = month;

let dayOfWeek = dateDuJour.getUTCDate();
// document.querySelector("#jour").innerHTML = jour;
document.getElementById("jour").innerHTML = dayOfWeek;

// resultat tuesday 26 december 2024
console.log(day + ' ' + jours + ' ' + month + ' ' + year);

let test = 3;