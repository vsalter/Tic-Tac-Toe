// JavaScript Document
let turn = 1; 
let id;
let winner;
let board = [null, null, null, null, null, null, null, null, null];
const winningCombos = [
	["0", "1", "2"],
	["3", "4", "5"],
	["6", "7", "8"],
	["0", "3", "6"],
	["1", "4", "7"],
	["2", "5", "8"],
	["0", "4", "8"],
	["2", "4", "6"]
	];
let player1moves = [];
let player2moves = [];


document.querySelectorAll(".square").forEach(function(square){
	square.addEventListener("click", makeAmove);
});

let button = document.getElementById("restartButton");
button.addEventListener("click", restartGame);

function makeAmove(evt) {
	
	id = parseInt(evt.target.id);	
	
	if(board[id] !== null) {
		return;
	}
	else {
		board[id] = id;
		if (turn === 1){
			evt.target.style.backgroundColor = "red";
			evt.target.innerHTML = "X";
			id.toString();
			checkIfWon(id, turn);
			turn ++;	
		}else {
			evt.target.style.backgroundColor = "lightBlue";
			evt.target.innerHTML = "O";
			id.toString();
			checkIfWon(id, turn);
			turn --;
		}
	}		
}

function restartGame() {
	window.location.reload(true);
};

function checkIfWon(string, num) {
	let match = 0;
	if (num === 1) {
		player1moves.push(string);
	}
	else {
		player2moves.push(string);
	}
};

