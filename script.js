"use strict";
const allBoxes = document.querySelectorAll(".box");
const box1 = document.querySelector("#b1");
const box2 = document.querySelector("#b2");
const box3 = document.querySelector("#b3");
const box4 = document.querySelector("#b4");
const box5 = document.querySelector("#b5");
const box6 = document.querySelector("#b6");
const box7 = document.querySelector("#b7");
const box8 = document.querySelector("#b8");
const box9 = document.querySelector("#b9");
const result = document.querySelector(".result");
const startBtn = document.querySelector(".start");
const reStartBtn = document.querySelector(".restart");
const names = document.querySelector(".names");
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");
const form = document.querySelector("form");
const gameboard = document.querySelector(".gameboard");

startBtn.addEventListener("click", function (e) {
  const player1name = document.getElementById("player1name").value;
  const player2name = document.getElementById("player2name").value;
  e.preventDefault();
  form.classList.add("hidden");
  gameboard.classList.remove("hidden");
  names.classList.remove("hidden");
  reStartBtn.classList.remove("hidden");
  name1.textContent = `Player 1: \u00A0\u00A0\u00A0\u00A0\u00A0     ${player1name}`;
  name2.textContent = `Player 2: \u00A0\u00A0\u00A0\u00A0\u00A0     ${player2name}`;
});

const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  return { board };
})();

const playerFactory = function (name, sign) {
  let addMark = function (box) {
    Gameboard.board[box - 1] = sign;
  };
  return { name, sign, addMark };
};

const player1 = playerFactory("player1", "X");
const player2 = playerFactory("player2", "O");
let player = player1;

const renderArray = function () {
  box1.textContent = Gameboard.board[0];
  box2.textContent = Gameboard.board[1];
  box3.textContent = Gameboard.board[2];
  box4.textContent = Gameboard.board[3];
  box5.textContent = Gameboard.board[4];
  box6.textContent = Gameboard.board[5];
  box7.textContent = Gameboard.board[6];
  box8.textContent = Gameboard.board[7];
  box9.textContent = Gameboard.board[8];
};

const switchTurns = function () {
  player === player1 ? (player = player2) : (player = player1);
};

const stopGame = function () {
  allBoxes.forEach((box) => box.removeEventListener("click", handleClick));
};

const checkRows = function () {
  if (Gameboard.board[0] === Gameboard.board[1] && Gameboard.board[1] === Gameboard.board[2] && Gameboard.board[2] === "X") {
    result.textContent = `${name1.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[0] === Gameboard.board[1] && Gameboard.board[1] === Gameboard.board[2] && Gameboard.board[2] === "O") {
    result.textContent = `${name2.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[3] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[5] && Gameboard.board[5] === "X") {
    result.textContent = `${name1.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[3] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[5] && Gameboard.board[5] === "O") {
    result.textContent = `${name2.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[6] === Gameboard.board[7] && Gameboard.board[7] === Gameboard.board[8] && Gameboard.board[8] === "X") {
    result.textContent = `${name1.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[6] === Gameboard.board[7] && Gameboard.board[7] === Gameboard.board[8] && Gameboard.board[8] === "O") {
    result.textContent = `${name2.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
};

const checkColumns = function () {
  if (Gameboard.board[0] === Gameboard.board[3] && Gameboard.board[3] === Gameboard.board[6] && Gameboard.board[6] === "X") {
    result.textContent = `${name1.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[0] === Gameboard.board[3] && Gameboard.board[3] === Gameboard.board[6] && Gameboard.board[6] === "O") {
    result.textContent = `${name2.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[1] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[7] && Gameboard.board[7] === "X") {
    result.textContent = `${name1.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[1] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[7] && Gameboard.board[7] === "O") {
    result.textContent = `${name2.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[2] === Gameboard.board[5] && Gameboard.board[5] === Gameboard.board[8] && Gameboard.board[8] === "X") {
    result.textContent = `${name1.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[2] === Gameboard.board[5] && Gameboard.board[5] === Gameboard.board[8] && Gameboard.board[8] === "O") {
    result.textContent = `${name2.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
};

const checkDiagonals = function () {
  if (Gameboard.board[0] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[8] && Gameboard.board[8] === "X") {
    result.textContent = `${name1.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[0] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[8] && Gameboard.board[8] === "O") {
    result.textContent = `${name2.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[2] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[6] && Gameboard.board[6] === "X") {
    result.textContent = `${name1.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
  if (Gameboard.board[2] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[6] && Gameboard.board[6] === "O") {
    result.textContent = `${name2.textContent.slice(10)} Won the Game!`;
    result.style.display = "flex";
    stopGame();
  }
};

const checkGameOver = function () {
  checkRows();
  checkColumns();
  checkDiagonals();
};

const checkTie = function () {
  if (Gameboard.board.filter((mark) => mark !== "").length === 9 && result.textContent === "") {
    result.style.display = "flex";
    result.textContent = "Tie";
  }
};

const handleClick = function (e) {
  player.addMark(Number(e.target.id[1]));
  renderArray();
  switchTurns();
  checkGameOver();
  checkTie();
};

const dispMark = function () {
  allBoxes.forEach((box) => box.addEventListener("click", handleClick, { once: true }));
};

const reStart = function () {
  reStartBtn.addEventListener("click", function () {
    result.style.display = "none";
    result.textContent = "";
    Gameboard.board = ["", "", "", "", "", "", "", "", ""];
    renderArray();
    dispMark();
  });
};

dispMark();
reStart();
