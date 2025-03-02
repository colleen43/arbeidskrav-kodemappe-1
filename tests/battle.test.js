// Her kan du skrive testene dine
//Test at kampen viser riktig resultat basert på HP.


const { checkFightResult } = require("../app");

describe("checkFightResult", () => {
beforeEach(() => {
  document.body.innerHTML = `
  <div class="game-container">
  <p id="battle-result"></p>
  <div id="character-display" class="profile-card"></div>
  <div id="battle-area" class="section"></div>
  </div>` ; 

}); 

test("Funksjonen skal skrive ut 'Du vant' hvis character hp er høyre enn fiende hp", () => {
  
  checkFightResult(80, 75);
  
  expect(document.getElementById("battle-result").innerHTML).toBe("Du vant!");

});

test("Funksjonen skal skrive ut 'Du tapte' hvis fiende hp er høyre enn character hp", () => {
  
  checkFightResult(75, 80);
  
  expect(document.getElementById("battle-result").innerHTML).toBe("Du tapte!");

}); 

test("Funksjonen skal skrive ut 'Uavgjort' hvis character hp er det samme som fiende hp", () => {
  
    checkFightResult(80, 80);
    
    expect(document.getElementById("battle-result").innerHTML).toBe("Uavgjort!");

});

}); 



/*const { showRandomEnemy } = require("../app");

test("Funksjonen skal skrive ut tilfeldig navn, bilde, hp og attack", () => {
   showRandomEnemy( {enemyNameValue: "Goblin", enemyImageValue: "dragon.jpg", 
    randomNumberHp: 100, randomNumberEnemyAttack: 30 })
   expect().toBe()
}); */
