
let argMoveId,
	argPlayerMove,
	argComputerMove,
	computerMove,
	playerMove,
	randomNumber,
	playerInput;

function getMoveName(argMoveId) {
	console.log(`wywołano funkcję getMoveName z argumentem: ${argMoveId}`);
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	} else {
		printMessage(
			`Nie znam ruchu o id ${argMoveId}. Zakładam, że chodziło o "kamień".`
		);
		return 'kamień';
	}
}

function displayResult(argPlayerMove, argComputerMove) {
	console.log(
		`wywołano funkcję displayResults z argumentami: ${argPlayerMove}, ${argComputerMove}`
	);
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożycze') {
		printMessage(`Wygrywasz!`);
	} else if (argPlayerMove == argComputerMove) {
        printMessage(`Remis!`);
    } else {
        printMessage(`Przegrywasz!`);
    }
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerMove = argButtonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

let argButtonName, buttonRock;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(`${argButtonName} został kliknięty`);
}
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Kamień'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Papier'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('Nożyce'); });
