import Game from '../../src/domain/Game.js';

test('Game', () => {
    const defaultGame = new Game();
    console.log(defaultGame);
    expect(defaultGame).toBeDefined();
});
