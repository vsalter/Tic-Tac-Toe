let turn = 1; 
let id;
let message = document.getElementById("message");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let s1 = parseInt(score1.innerHTML);
let s2 = parseInt(score2.innerHTML);
let board = [null, null, null, null, null, null, null, null, null];



document.querySelectorAll(".inSquare").forEach(function(square){
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
		if (turn === 1){
//			evt.target.style.backgroundColor = "red";
			evt.target.style.color = "black";
			evt.target.innerHTML = "X";
			board[id] = 'X';
			console.log(board);
			checkWinner(turn);	
		}else {
//			evt.target.style.backgroundColor = "lightBlue";
			evt.target.style.color = "black";
			evt.target.innerHTML = "O";
			board[id] = 'O';
			console.log(board);
			checkWinner(turn);
		}
	}		
}


function checkWinner(num) {

	if (num === 1) {
		if ((hCheck(num)) || (vCheck(num)) || (dCheck(num))) {
			s1++;
			message.innerHTML = "Player 1 is the winner";
			score1.innerHTML = `${s1}`;
			return;
		} else if (tCheck()) {
			message.innerHTML = "Looks like we have a tie!";
			return;
		} else {
			turn++;
			message.innerHTML = "Player 2's turn";
			return;
		}
	} else {
		if ((hCheck(num)) || (vCheck(num)) || (dCheck(num))) {
			s2++;
			message.innerHTML = "Player 2 is the winner";
			score2.innerHTML = `${s2}`;
			return;
		} else if (tCheck()) {
			alert('Looks like we have a tie');
			return;
		} else {
			turn--;
			message.innerHTML = "Player 1's turn";
			return;
		}
	}
};


function hCheck(num) {
	if (num === 1){
		if (((board[0] === 'X') && (board[3] === 'X') && (board[6] === 'X')) || ((board[1] === 'X') && (board[4] === 'X') && (board[7] === 'X')) || ((board[2] === 'X') && (board[5] === 'X') && (board[8] === 'X'))) {
			document.querySelectorAll(".inSquare").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	} else {
		if (((board[0] === 'O') && (board[3] === 'O') && (board[6] === 'O')) || ((board[1] === 'O') && (board[4] === 'O') && (board[7] === 'O')) || ((board[2] === 'O') && (board[5] === 'O') && (board[8] === 'O'))) {
			document.querySelectorAll(".inSquare").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	}
}


function vCheck(num) {
	if (num === 1){
		if (((board[0] === 'X') && (board[1] === 'X') && (board[2] === 'X')) || ((board[3] === 'X') && (board[4] === 'X') && (board[5] === 'X')) || ((board[6] === 'X') && (board[7] === 'X') && (board[8] === 'X'))) {
			document.querySelectorAll(".inSquare").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	} else {
		if (((board[0] === 'O') && (board[1] === 'O') && (board[2] === 'O')) || ((board[3] === 'O') && (board[4] === 'O') && (board[5] === 'O')) || ((board[6] === 'O') && (board[7] === 'O') && (board[8] === 'O'))) {
			document.querySelectorAll(".inSquare").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	}
}


function dCheck(num) {
	if (num === 1){
		if (((board[0] === 'X') && (board[4] === 'X') && (board[8] === 'X')) || ((board[2] === 'X') && (board[4] === 'X') && (board[6] === 'X'))) {
			document.querySelectorAll(".inSquare").forEach(function(square){
				square.removeEventListener("click", makeAmove);
			});
			return true;
		}
	} else {
		if (((board[0] === 'O') && (board[4] === 'O') && (board[8] === 'O')) || ((board[2] === 'O') && (board[4] === 'O') && (board[6] === 'O'))) {
			document.querySelectorAll(".inSquare").forEach(function(square){
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
	turn = 1;
	message.innerHTML = "Player 1's turn";
	board = [null, null, null, null, null, null, null, null, null];
	
	document.querySelectorAll(".inSquare").forEach(function(square){
		square.innerHTML = "0";
		square.style.color = "white";
		square.addEventListener("click", makeAmove);
	});

};
