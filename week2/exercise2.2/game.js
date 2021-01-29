const game = window.prompt("I have four games in my Collection. Pick a number between 1 and 4 and I'll tell you about the game you've chosen.");

const myGames = [
    {title: 'Clue', type: 'board game', numberOfPlayers: 6, rating: 8, shortDescription: 'murder mystery'},
    {title: 'Set', type: 'card game', numberOfPlayers: 4, rating: 10, shortDescription: 'game of visual perception'},
    {title: 'Jenga', type: 'puzzle', numberOfPlayers: 6, rating: 4, shortDescription: 'stacking puzzle with a loud crash that is beloved by children'},
    {title: 'Codenames', type: 'party game', numberOfPlayers: 8, rating: 7, shortDescription: 'team guessing game like Battleship, in which players try to get their teammates to guess certain words'}

];

console.log('title', myGames[0].title);

window.alert(
    'You selected ' + myGames[game - 1].title + ' which is a ' + myGames[game - 1].type + ' and played with up to ' + myGames[game - 1].numberOfPlayers + ' players. People often describe this game as a ' + myGames[game - 1].shortDescription + '. I rate this game ' + myGames[game - 1].rating + ' out of 10.'
    );