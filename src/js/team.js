// TODO: write your code here

export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error('Выбранный персонаж уже присутствует в команде');
      }
        this.members.add(character);
      }
  
    addAll(...allCharacter) {
      allCharacter.forEach((character) => {
        this.members.add(character);
      });
    }
  
    toArray() {
      return [...this.members];
    }
  }