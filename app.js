
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

const startFight = document.getElementById("start-fight");
const battleArea = document.getElementById("battle-area");


// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.

// Create elementer og lage strukturen
const profileCard = document.createElement("div");

function appendProfileCard(){
battleArea.append(profileCard);
}


const charTitle = document.createElement("h2");
const charImage = document.createElement("img");
charImage.style.display = "none"; //So the battle area looks cleaner before fight
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

const enemyprofileCard = document.createElement("div");
const enemyTitle = document.createElement("h2");
const enemyFightImage = document.createElement("img");
enemyFightImage.style.display = "none"; //So the battle area looks cleaner before fight
const enemyFightName = document.createElement("p");
const enemyFightHp = document.createElement("p");
const enemyFightAttack = document.createElement("p");

function appendenemyProfileCard(){
battleArea.append(enemyprofileCard);
}


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

function getStoredData(){
    let hentetSelectedPicture = localStorage.getItem("profilepicture");
    let hentetCharacterValues = JSON.parse(localStorage.getItem("charactername"));
    let hentetEnemyData = JSON.parse(localStorage.getItem("randomenemycard"));

    return { hentetSelectedPicture: hentetSelectedPicture, 
        hentetCharacterValues: hentetCharacterValues, 
        hentetEnemyData: hentetEnemyData  };
}

function oppdaterHTML(hentetSelectedPicture, hentetCharacterValues, hentetEnemyData){
    charImage.style.display = "block";
    charName.textContent = "";
    charHp.textContent = "";
    charAttackDamage.textContent = "";
    enemyFightImage.style.display = "block";
    enemyFightName.textContent = "";
    enemyFightHp.textContent = "";
    enemyFightAttack.textContent = "";
    
    charImage.src = hentetSelectedPicture;
    charName.textContent = `Navn: ${hentetCharacterValues.navn}`;
    charHp.textContent = `HP: ${hentetCharacterValues.hp}`;
    charAttackDamage.textContent = `Attack Damage: ${hentetCharacterValues.attackDamageInfo}`;
    enemyFightImage.src = `assets/${hentetEnemyData.image}`;
    enemyFightName.textContent = `Navn: ${hentetEnemyData.enemy}`;
    enemyFightHp.textContent = `HP: ${hentetEnemyData.hp}`;
    enemyFightAttack.textContent =  `Attack Damage: ${hentetEnemyData.attack}`;

} 

function checkFightResult(characterHp, enemyHp){
    const battleFight = document.getElementById("battle-result");
    battleFight.innerHTML = "";
    if(characterHp > enemyHp){
    battleFight.innerHTML = "Du vant!";
} else if (enemyHp > characterHp){
    battleFight.innerHTML = "Du tapte!";
} else if (enemyHp === characterHp){
    battleFight.innerHTML = "Uavgjort!";
}
}

function clickStartFight(){
   const { hentetSelectedPicture, hentetCharacterValues, hentetEnemyData} = getStoredData();
   oppdaterHTML(hentetSelectedPicture, hentetCharacterValues, hentetEnemyData, charImage);
   checkFightResult(hentetCharacterValues.hp, hentetEnemyData.hp); 
}
   

window.onload = () => {
    appendProfileCard();
    appendenemyProfileCard();
    createCharacter.addEventListener("click", addCharacterValues);
    generateEnemy.addEventListener("click", showRandomEnemy);
    startFight.onclick = clickStartFight; 

}



//For testing
    
module.exports = { checkFightResult };

/*module.exports = {
    transformIgnorePatterns: ["/node_modules/(?!(your-dependency)/)"]
  }; */






