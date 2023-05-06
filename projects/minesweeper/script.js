// display/ui

import {
	TILE_STATUSES,
	checkLose,
	checkWin,
	createBoard,
	markTile,
	revealTile
} from "./minesweeper.js";

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElm = document.querySelector(".board");
const minesLeftText = document.querySelector("[data-mine-count");
const subTitleText = document.querySelector('.sub__title')



board.forEach((row) => {
  row.forEach((tile) => {
    boardElm.append(tile.elm);
    tile.elm.addEventListener("click", () => {
      revealTile(board, tile);
      checkGameEnd();
    });
    tile.elm.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      markTile(tile);
      listMinesLeft();
    });
  });
});

boardElm.style.setProperty("--size", BOARD_SIZE);
minesLeftText.textContent = NUMBER_OF_MINES;

function listMinesLeft() {
  const markedTilesCount = board.reduce((count, row) => {
    return (
      count + row.filter((tile) => tile.status === TILE_STATUSES.MARKED).length
    );
  }, 0);

  minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount;
}

function checkGameEnd() {
  const win = checkWin(board);
  const lose = checkLose(board);

  if (win || lose) {
    boardElm.addEventListener("click", stopProp, { capture: true });
    boardElm.addEventListener("contextmenu", stopProp, { capture: true });
  }

	if(win) {
		subTitleText.textContent = 'Wow, you win!'
	} 
	if(lose) {
		subTitleText.textContent = 'Oh no, you lose!'
		board.forEach(row => {
			row.forEach(tile => {
				if(tile.status === TILE_STATUSES.MARKED) markTile(tile)
				if(tile.mine)	revealTile(board, tile)
				
			})
		})
	}
}

function stopProp(e) {
  e.stopImmediatePropagation();
}

// populate/create minesweeper board with tiles/mines
// left click on tiles
// reveal tiles
// right click on tiles
// mark tiles
// check for win/lose
