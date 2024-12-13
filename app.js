console.log("hello world");

// Date.now(2)
// var heureMinutesSeconde = Date.now(2);5

const jourSemaine = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

const moisAnnee = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];
//http://api.weatherapi.com/v1/current.json?key=90f98e6e09bc425ca3695906241312&q=London&aqi=no

var options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);



const key = "90f98e6e09bc425ca3695906241312"
const uri = "http://api.weatherapi.com/v1/current.json?key=90f98e6e09bc425ca3695906241312&q=43.6048462,1.442848"
let resultat 

// let dateDuJour = new Date();
// console.log(dateDuJour);

// let hours = dateDuJour.getHours();
// console.log(hours + " heure");

// let minutes = dateDuJour.getMinutes();
// let x = document.querySelector("#hour");
// x.innerHTML = hours + " : " + minutes;
// document.querySelector("#hour").innerHTML = hours + " : " + minutes;
$(document).ready(function () {
  const thisDay = new Date();

  thisDay.setDate(thisDay.getDate());


  //   $("#hour").html(hours + " : " + minutes);
  setInterval(function () {
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
    $("#hours").html((hours < 10 ? "0" : "") + hours);
    $("#minutes").html((minutes < 10 ? "0" : "") + minutes);
    let day = thisDay.getDay();
		$("#day").html(jourSemaine[day]);
		let numberDay = thisDay.getUTCDate();
		$("#jour").html(numberDay);
		let month = thisDay.getMonth();
		$("#month").html(moisAnnee[month]);
		let year = thisDay.getFullYear();
		$("#year").html(year);
  }, 1000);
		
  

	// dateDuJour.getFullYear()
  // $("#year").html(year);
});

// resultat: 10:53
// console.log(hours + "h" + minutes);

// let year = dateDuJour.getFullYear();
// console.log(year + " année");
// document.querySelector("#year").innerHTML = year;

// let day = dateDuJour.getDay();
// document.querySelector("#day").innerHTML = jourSemaine[day];

// let month = dateDuJour.getMonth();
// console.log(month + " mois");
// document.querySelector("#month").innerHTML = moisAnnee[month];

// let dayOfWeek = dateDuJour.getUTCDate();
// document.querySelector("#jour").innerHTML = jour;
// document.getElementById("jour").innerHTML = dayOfWeek;

// resultat tuesday 26 december 2024
// console.log(day + " " + jour + " " + month + " " + year);
