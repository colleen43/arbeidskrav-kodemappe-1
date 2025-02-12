//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

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


// Lagre valgt bilde i local storage

function addProfilePicture(){
    localStorage.setItem("profile picture", selectedPicture);
}


function addCharacterValues() {
    const characterNameValue = {
        navn: characterName.value,
        hp: characterHp.value,
        attackDamageInfo: attackDamage.value,
    };
    
    localStorage.setItem("character name", JSON.stringify(characterNameValue));
}

createCharacter.addEventListener("click", addCharacterValues);
createCharacter.addEventListener("click", addProfilePicture);



//Seksjon 2: Generer fiende
const generateEnemy = document.getElementById("generate-enemy");
const enemyName = document.getElementById("enemy-name");
const enemyHp = document.getElementById("enemy-hp");
const enemyAttack = document.getElementById("enemy-attack");
const enemyImage = document.getElementById("enemy-img");


const enemyNames = ["Goblin", "Ork", "Drage"];
const enemyImages = ["dragon.jpg", "monster.jpg", "swamp-monster.jpg"];


const randomNumberHp = Math.floor((Math.random() * 150) + 50);
const randomNumberEnemyAttack = Math.floor((Math.random() * 40) + 10);

function showRandomEnemy(){
enemyName.innerHTML = `Enemy: ${enemyNames[Math.floor(Math.random() * enemyNames.length)]}`;
enemyHp.innerHTML = `HP: ${randomNumberHp}`;
enemyAttack.innerHTML = `Enemy attack: ${randomNumberEnemyAttack}`;
enemyImage.src = `assets/${enemyImages[Math.floor(Math.random() * enemyImages.length)]}`;
};

generateEnemy.onclick = showRandomEnemy; 



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


console.log(profileCard);





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

