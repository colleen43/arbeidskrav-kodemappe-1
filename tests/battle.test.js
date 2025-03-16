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


describe("Add Character Values", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <input type="text" id="character-name" value="Marta"/>
    <input type="number" id="character-hp" value=250 />
    <input type="number" id="attack-damage" value=437 />
`;

});

test("Character navn, hp, og attack damage som skrives i input feltene, skal generere riktig verdier", () => {
const characterName = document.getElementById("character-name");
expect(characterName.value).toBe("Marta");

const characterHp = Number(document.getElementById("character-hp").value);
expect(characterHp).toBe(250);

const attackDamage = Number(document.getElementById("attack-damage").value);
expect(attackDamage).toBe(437);

});
  
});


