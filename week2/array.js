const newmovie = window.prompt("What is your favorite movie?");

const myMovies = [
    "Bend it Like Beckham",
    "Goldfinger",
    "Breakfast at Tiffany's",
    "The Godfather I",
    "The Two Popes"
];
console.log(myMovies);

myMovies.push(newmovie);
console.log(myMovies);
