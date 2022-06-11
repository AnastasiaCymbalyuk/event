/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
import Board from './Board';

export default class GamePlay {
  constructor() {
    this.board = new Board();
    this.score = document.querySelector('.score');
  }

  init() {
    this.board.rendering();
    document.querySelector('.btn').addEventListener('click', this.onClickBtn.bind(this));
    document.querySelector('.board').addEventListener('click', this.onclickGoblin.bind(this));
  }

  onClickBtn() {
    if (!this.board.interval) {
      this.board.interval = setInterval(this.board.random.bind(this.board), 1000);
    } else {
      alert('Обновите страницу для начала новой игры');
    }
  }

  onclickGoblin(event) {
    const checkGoblin = document.querySelector('.goblin');
    if (event.target.contains(checkGoblin)) {
      this.score.textContent++;
      checkGoblin.classList.remove('goblin');
      this.board.quantityGoblin = 0;
    }
  }
}
