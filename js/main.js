// JavaScript Document
/*let square1 = document.getElementById("1");
square1.addEventListener("click", function(){
	square1.style.backgroundColor = "red";
})*/
let turn = 1; 
let id;
let winner;
let board = [null, null, null, null, null, null, null, null, null];
//const winningCombos = [
//	["0", "1", "2"],
//	["3", "4", "5"],
//	["6", "7", "8"],
//	["0", "3", "6"],
//	["1", "4", "7"],
//	["2", "5", "8"],
//	["0", "4", "8"],
//	["2", "4", "6"]
//	];
let player1moves = [];
let player2moves = [];


document.querySelectorAll(".inSquare").forEach(function(square){
	square.addEventListener("click", makeAmove);
});

let button = document.getElementById("restartButton");
button.addEventListener("click", restartGame);

/*let square2 = document.getElementById("two");
square2.onclick = makeAmove();

let square3 = document.getElementById("three");
square3.onclick = makeAmove();

let square4 = document.getElementById("four");
square4.onclick = makeAmove();

let square5 = document.getElementById("five");
square5.onclick = makeAmove();

let square6 = document.getElementById("six");
square6.addEventListener("click", makeAmove());

let square7 = document.getElementById("seven");
square7.onclick = makeAmove();

let square8 = document.getElementById("eight");
square8.onclick = makeAmove();

let square9 = document.getElementById("nine");
square9.onclick = makeAmove();


let restart = document.getElementById("restartButton");
restart.onclick = restartGame;*/


function makeAmove(evt) {
	
	id = parseInt(evt.target.id);	
	
	if(board[id] !== null) {
		return;
	}
	else {
		if (turn === 1){
			evt.target.style.backgroundColor = "red";
			evt.target.innerHTML = "X";
//			id.toString();
			board[id] = 'X';
			console.log(board);
			checkWinner(turn);	
		}else {
			evt.target.style.backgroundColor = "lightBlue";
			evt.target.innerHTML = "O";
//			id.toString();
			board[id] = 'O';
			console.log(board);
			checkWinner(turn);
		}
	}		
}


function checkWinner(num) {

	if (num === 1) {
		if ((hCheck(num)) || (vCheck(num)) || (dCheck(num))) {
			alert('Player 1 is the winner');
			return;
		} else if (tCheck()) {
			alert('Looks like we have a tie');
			return;
		} else {
			turn++;
			return;
		}
	} else {
		if ((hCheck(num)) || (vCheck(num)) || (dCheck(num))) {
			alert('Player 2 is the winner');
			return;
		} else if (tCheck()) {
			alert('Looks like we have a tie');
			return;
		} else {
			turn--;
			return;
		}
	}
};


function hCheck(num) {
	if (num === 1){
		if (((board[0] === 'X') && (board[3] === 'X') && (board[6] === 'X')) || ((board[1] === 'X') && (board[4] === 'X') && (board[7] === 'X')) || ((board[2] === 'X') && (board[5] === 'X') && (board[8] === 'X'))) {
			document.querySelectorAll(".square").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	} else {
		if (((board[0] === 'O') && (board[3] === 'O') && (board[6] === 'O')) || ((board[1] === 'O') && (board[4] === 'O') && (board[7] === 'O')) || ((board[2] === 'O') && (board[5] === 'O') && (board[8] === 'O'))) {
			document.querySelectorAll(".square").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	}
}


function vCheck(num) {
	if (num === 1){
		if (((board[0] === 'X') && (board[1] === 'X') && (board[2] === 'X')) || ((board[3] === 'X') && (board[4] === 'X') && (board[5] === 'X')) || ((board[6] === 'X') && (board[7] === 'X') && (board[8] === 'X'))) {
			document.querySelectorAll(".square").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	} else {
		if (((board[0] === 'O') && (board[1] === 'O') && (board[2] === 'O')) || ((board[3] === 'O') && (board[4] === 'O') && (board[5] === 'O')) || ((board[6] === 'O') && (board[7] === 'O') && (board[8] === 'O'))) {
			document.querySelectorAll(".square").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	}
}


function dCheck(num) {
	if (num === 1){
		if (((board[0] === 'X') && (board[4] === 'X') && (board[8] === 'X')) || ((board[2] === 'X') && (board[4] === 'X') && (board[6] === 'X'))) {
			document.querySelectorAll(".square").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	} else {
		if (((board[0] === 'O') && (board[4] === 'O') && (board[8] === 'O')) || ((board[2] === 'O') && (board[4] === 'O') && (board[6] === 'O'))) {
			document.querySelectorAll(".square").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	}
}


function tCheck(){
	let sum = 0;
	for (let a = 0; a < 9; a++){
		if(board[a] === null){
			sum++;
		}	
	}
	if (sum > 0){
		return false;
	} else {
		return true;
	}
}


function restartGame() {
	window.location.reload(true);
};
