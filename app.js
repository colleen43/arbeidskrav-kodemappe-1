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
        console.log(selectedPicture)
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


const EnemyNames = ["Goblin", "Ork", "Drage"];
const enemyImages = ["dragon.jpg", "monster.jpg", "swamp-monster.jpg"];
console.log(enemyImages)

const randomNumberHp = Math.floor((Math.random() * 150) + 50);
const randomNumberenemyAttack = Math.floor((Math.random() * 40) + 10);

function showRandomEnemy(){
enemyName.innerHTML = `Enemy: ${EnemyNames[Math.floor(Math.random() * EnemyNames.length)]}`;
enemyHp.innerHTML = `HP: ${randomNumberHp}`;
enemyAttack.innerHTML = `Enemy attack: ${randomNumberenemyAttack}`;
};

generateEnemy.onclick = showRandomEnemy; 





// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.
