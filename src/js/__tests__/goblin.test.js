import Board from '../Board';

it('board', () => {
  document.addEventListener('DOMContentLoaded', () => {
    const board = new Board();
    const cells = board.rendering();
    const result = cells.querySelectorAll('.cell');
    expect(result).toBe(16);
  });
});
