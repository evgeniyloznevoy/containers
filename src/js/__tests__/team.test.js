import Team from '../team';

test('add', () => {
  const team = new Team();
  team.add('Bowman');
  team.add('Swordsman');
  expect([...team.members]).toEqual(['Bowman', 'Swordsman']);
});

test('toArray', () => {
  const team = new Team();
  team.add('Bowman');
  team.add('Swordsman');
  expect(team.toArray()).toEqual(['Bowman', 'Swordsman']);
});

test('addAll', () => {
  const team = new Team();
  team.addAll('Bowman', 'Swordsman', 'Daemon');
  expect(team.toArray()).toEqual(['Bowman', 'Swordsman', 'Daemon']);
});

test('Error', () => {
  const team = new Team();
  team.add('Bowman');
  team.add('Swordsman');
  expect(() => { team.add('Bowman'); }).toThrowError('Выбранный персонаж уже присутствует в команде');
});