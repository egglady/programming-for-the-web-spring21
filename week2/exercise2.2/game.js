const newGame = window.prompt("I have four games in my Collection. Pick a number between 1 and 4 and I'll tell you about the game you've chosen.");

const myGames = {
    title: 'Clue', type: 'eggs', numberOfPlayers: 6, rating: 1, shortDescription:'murder mystery',
    title: 'Set', type: 'bacon', numberOfPlayers: 4, rating: 9, shortDescription:'visual perception',
    title: 'Jenga', type: 'toast', numberOfPlayers: 10, rating: 7, shortDescription:'stacking puzzle',
    title: 'Codenames', type: 'butter', numberOfPlayers: 12, rating: 8, shortDescription:'team guessing game like Battleship'
};

console.log(myGames);
