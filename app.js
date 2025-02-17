
// Del 1: Lag karakter og lagre karakteren i localStorage
const characterName = document.getElementById("character-name");
const characterHp = document.getElementById("character-hp");
const attackDamage = document.getElementById("attack-damage");
const profileImages = document.getElementsByClassName("profile-img");
const createCharacter = document.getElementById("create-character");

//Gjør hvert av bildene trykkbare med en for løkke, og lagre valget i en variabel

let selectedPicture = "";

for(let i = 0; i < profileImages.length; i++){
    profileImages[i].onclick = function() {
        selectedPicture = profileImages[i].src
    }};


function addCharacterValues() {

    const characterValues = {
        navn: characterName.value,
        hp: Number(characterHp.value),
        attackDamageInfo: Number(attackDamage.value),
    };
    
    localStorage.setItem("profilepicture", selectedPicture);
    localStorage.setItem("charactername", JSON.stringify(characterValues));
}

createCharacter.addEventListener("click", addCharacterValues);




//Seksjon 2: Generer fiende
const generateEnemy = document.getElementById("generate-enemy");
const enemyName = document.getElementById("enemy-name");
const enemyHp = document.getElementById("enemy-hp");
const enemyAttack = document.getElementById("enemy-attack");
const enemyImage = document.getElementById("enemy-img");


const enemyNames = ["Goblin", "Ork", "Drage"];
const enemyImages = ["dragon.jpg", "monster.jpg", "swamp-monster.jpg"];


function showRandomEnemy(){
    enemyName.innerHTML = "";
    enemyImage.src = "";
    enemyHp.innerHTML = "";
    enemyAttack.innerHTML = "";
    
    const enemyNameValue = enemyNames[Math.floor(Math.random() * enemyNames.length)];
    const enemyImageValue = enemyImages[Math.floor(Math.random() * enemyImages.length)];
    const randomNumberHp = Math.floor((Math.random() * 150) + 50);
    const randomNumberEnemyAttack = Math.floor((Math.random() * 40) + 10);
    
    
    const enemyData = {
        enemy: enemyNameValue,
        image: enemyImageValue,
        hp: Number(randomNumberHp),
        attack: Number(randomNumberEnemyAttack),
    };
    localStorage.setItem("randomenemycard", JSON.stringify(enemyData));

   
    enemyName.innerHTML = `Enemy: ${enemyNameValue}`;
    enemyImage.src = `assets/${enemyImageValue}`;
    enemyHp.innerHTML = `HP: ${randomNumberHp}`;
    enemyAttack.innerHTML = `Enemy attack: ${randomNumberEnemyAttack}`;
    
};


generateEnemy.addEventListener("click", showRandomEnemy);




// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.

/* Slik skal fremvisning av helten se ut. Du skal lage disse taggene og denne strukturen i Javascript. 
<div id="character-display" class="profile-card">
  <h2>Helten</h2>
  <img id="char-img" alt="Profilbilde" />
  <p id="char-name"></p>
  <p id="char-hp"></p>
  <p id="char-attack"></p>
</div>
*/

const battleArea = document.getElementById("battle-area");
const startFight = document.getElementById("start-fight");
const battleFight = document.getElementById("battle-result");

// Create elementer og lage strukturen
const profileCard = document.createElement("div");
battleArea.append(profileCard);

const charTitle = document.createElement("h2");
const charImage = document.createElement("img");
const charName = document.createElement("p");
const charHp = document.createElement("p");
const charAttackDamage = document.createElement("p");

profileCard.append(charTitle, charImage, charName, charHp, charAttackDamage);

//Legge til id'er og klasser og innerhtml
profileCard.id = 'character-display';
profileCard.classList.add("profile-card");

charTitle.innerHTML = "Helten"; 

charImage.id = "char-img";
charImage.alt = "Profilbilde";


charName.id = "char-name";

charHp.id = "char-hp";

charAttackDamage.id = "char-attack";



/*
<!-- Slik skal fremvisning av fienden se ut. Du skal lage disse taggene og denne strukturen i Javascript.
<div id="enemy-fight-display" class="profile-card">
  <h2>Fiende</h2>
  <img id="enemy-fight-img" alt="Fiendens profilbilde" />
  <p id="enemy-fight-name"></p>
  <p id="enemy-fight-hp"></p>
  <p id="enemy-fight-attack"></p>
</div>
*/

const enemyprofileCard = document.createElement("div");
battleArea.append(enemyprofileCard);

const enemyTitle = document.createElement("h2");
const enemyFightImage = document.createElement("img");
const enemyFightName = document.createElement("p");
const enemyFightHp = document.createElement("p");
const enemyFightAttack = document.createElement("p");

enemyprofileCard.append(enemyTitle, enemyFightImage, enemyFightName, enemyFightHp, enemyFightAttack);

//Legge til id'er og klasser og innerhtml
enemyprofileCard.id = 'enemy-fight-display';
enemyprofileCard.classList.add("profile-card");

enemyTitle.innerHTML = "Fiende"; 

enemyFightImage.id = "enemy-fight-img";
enemyFightImage.alt = "Fiendens profilbilde";

enemyFightName.id = "enemy-fight-name";

enemyFightHp.id = "enemy-fight-hp";

enemyFightAttack.id = "enemy-fight-attack";


//Simuler en kamp

function clickStartFight(){
    let hentetSelectedPicture = localStorage.getItem("profilepicture");

//localStorage.setItem("charactername", JSON.stringify(characterValues));
let hentetCharacterValues = localStorage.getItem("charactername");
hentetCharacterValues = JSON.parse(hentetCharacterValues);

//localStorage.setItem("randomenemycard", JSON.stringify(enemyData));
let hentetEnemyData = localStorage.getItem("randomenemycard");
hentetEnemyData = JSON.parse(hentetEnemyData);
    
    charImage.src = "";
    charName.textContent = "";
    charHp.textContent = "";
    charAttackDamage.textContent = "";
    enemyFightImage.src = "";
    enemyFightName.textContent = "";
    enemyFightHp.textContent = "";
    enemyFightAttack.textContent = "";
    battleFight.innerHTML = "";
    
    charImage.src = hentetSelectedPicture;
    charName.textContent = `Navn: ${hentetCharacterValues.navn}`;
    charHp.textContent = `HP: ${hentetCharacterValues.hp}`;
    charAttackDamage.textContent = `Attack Damage: ${hentetCharacterValues.attackDamageInfo}`;
    enemyFightImage.src = `assets/${hentetEnemyData.image}`;
    enemyFightName.textContent = `Navn: ${hentetEnemyData.enemy}`;
    enemyFightHp.textContent = `HP: ${hentetEnemyData.hp}`;
    enemyFightAttack.textContent =  `Attack Damage: ${hentetEnemyData.attack}`;


    if( hentetCharacterValues.hp > hentetEnemyData.hp){
        battleFight.innerHTML = "Du vant!";
    
    } else if (hentetEnemyData.hp > hentetCharacterValues.hp){
        battleFight.innerHTML = "Du tapte!";
    } else if (hentetEnemyData.hp === hentetCharacterValues.hp){
        battleFight.innerHTML = "Uavgjort!";
    }

    //For testing
    
}

startFight.onclick = clickStartFight;


//module.exports = { clickStartFight };






