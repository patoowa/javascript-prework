let playerMove;
playerMove = 'papier';
printMessage ('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

let computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(`Wylosowana liczba to: ${randomNumber}`);
if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}
printMessage(`Mój ruch: ${computerMove}`);



























































