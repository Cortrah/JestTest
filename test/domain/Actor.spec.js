import Actor from '../../src/domain/Actor';

test('Actor', () => {
  const defaultActor = new Actor(1);
  expect(defaultActor).toBeDefined();
  expect(defaultActor.index).toBe(1);
});


