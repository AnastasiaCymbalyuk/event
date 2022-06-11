import GamePlay from './GamePlay';

it('board', () => {
  document.addEventListener('DOMContentLoaded', () => {
    const goblin = new GamePlay();
    const cells = goblin.board.rendering();
    const result = cells.querySelectorAll('.cell');
    expect(result).toBe(16);
  });
});
