// Her kan du skrive testene dine


const { clickStartFight } = require("../app");

test("Funksjonen skal skrive ut 'Du vant' hvis character hp er høyre enn fiende hp", () => {
  expect(clickStartFight(80, 75)).toBe("Du vant!");
}); 



/*const { showRandomEnemy } = require("../app");

test("Funksjonen skal skrive ut tilfeldig navn, bilde, hp og attack", () => {
   showRandomEnemy( {enemyNameValue: "Goblin", enemyImageValue: "dragon.jpg", 
    randomNumberHp: 100, randomNumberEnemyAttack: 30 })
   expect().toBe()
}); */
