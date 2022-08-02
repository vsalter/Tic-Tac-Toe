// JavaScript Document
/*let square1 = document.getElementById("1");
square1.addEventListener("click", function(){
	square1.style.backgroundColor = "red";
})*/
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
		player1moves.forEach(function(){
			if (winningCombos.includes(num)){
				match++;
			}
			if (match === 3){
				alert("Player 1 Wins!");
			}
		});
	}
	else {
		player2moves.push(string);
		player2moves.forEach(function(){
			if (winningCombos.includes(num)){
				match++;
			}
			if (match === 3){
				alert("Player 2 Wins!");
			}
		});
	}
};

