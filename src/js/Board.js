/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
export default class Board {
  constructor() {
    this.board = document.querySelector('.board');
    this.boardSize = 4 * 4;
    this.pozitionItem = null;
    this.interval = null;
    this.quantityGoblin = 0;
  }

  rendering() {
    for (let i = 0; i < this.boardSize; i++) {
      const cells = document.createElement('div');
      cells.classList.add('cell');
      this.board.appendChild(cells);
    }
  }

  random() {
    const array = document.querySelectorAll('.cell');
    const active = document.querySelector('.goblin');
    function randomSearch(min, max) {
      return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    }
    const pozitionNow = randomSearch(0, this.boardSize - 1);
    if (this.pozitionItem !== pozitionNow) {
      this.pozitionItem = pozitionNow;
      if (active) {
        active.classList.remove('goblin');
      }
      array[this.pozitionItem].classList.toggle('goblin');
      this.quantityGoblin++;
      if (this.quantityGoblin === 5) {
        this.gameOver();
      }
    }
  }

  gameOver() {
    clearInterval(this.interval);
    alert('Вы проиграли! Обновите страницу');
  }
}
