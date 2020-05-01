const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// test
/////////////////////////////////////Player \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let power = 10;
let playerLife = 100;
let playerStats ={
    currentRoom : "",
    iventory: [],
}

let playerEquip ={
    armor :"",
    boots: "",
    weapon:""
}

var playerPosition ={
    currentRoom :""
    
}
/////////////////////////////// Item List \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let itemList ={
    sword:'sword',
    shield:'shield',
    armor:'OGE Shirt'
}
let sword ={
    swordlvl1 : {
        name : "Katana",
        power: 47

    }

}
//////////////////////////// Boost Foods \\\\\\\\\\\\\\\\\\\\\\\\\\\\
let foods ={
    pizza:'pizza',
    soda:'coke',
    beer:'beer'
}
///////////////////////////// MOBS --- BOSS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let gremHP = 100;
let mob = {
    Gremelin : {
        iventory:{
            wallet : "$" + 4.20 + " Dollars",
            sword : "Katana",
            boots : "Old pair of boots"
        
    }
}
}

let bigBossHP = 100;
let bigBoos = {
    name :"Zotac",
    HP : 100,
    iventory : {
        armor : "North Face- Jacket",
        card : "Pass 789123"
    }
}
let deadBodys = {

}
/////////////////////////////Starting items \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let items ={
    sword :{
        power : 1,
        strength : 3
    },
    backback:{
        
    }
}




/////////////////////////////LVLS--------ROOMS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//WEre you start 
let lvl1name = "182 Main St."
let lvl1 = {
    name : "182 Main St.",
    romm: " A mail box , A dead body , A monster!\n",
    mailBox: "Act1-Letter"
    }

///// function if 1 attack else 

start();
async function start(){
let travelerName = await ask("Please chose the player name \n")
let gameStart = await ask ("Hello " +  travelerName + " do you want to play the game ? \n");
if (gameStart == 'yes' || gameStart == 'y'){
    startGame();
}
}
////////////////////////// Historia \\\\\\\\\\\\\\\\\\\\\\\\
async function startGame(){
console.log("Welcome Traveler!\n")
console.log("This is the beggining of your journey in 'The Green-Venture' ! PLEASE Follow the Rules.\n 1)Only type in lower case.\n 2)Dont use any punctuation \n")
console.log("\nZotac is the last famous Emperor of Elmoreden, the creator of the BCA-Tower of Insolence, and the bringer of the Golden Age.\nHe is also the father of Frintezza, the last Emperor, and of Saint Solina.  ")
console.log("So let Your journey beggin....\n");
firstLvl1();

    /////////////// The journey \\\\\\\\\\\\\\\

async function firstLvl1(){
    playerPosition.currentRoom = "182 Main St."
console.log("Your are in " + lvl1name + " you can see, \n" + lvl1.romm + " \n" );
while(playerPosition.currentRoom == "182 Main St."){

let answer = await ask(">_");
if( answer.includes("mail box")){
    console.log("You are near to a mail box , what could be inside ? \n");
        let answer2 = await ask(">_");
    if(answer2.includes("open") || answer2.includes("examine")){
    console.log("You found " + lvl1.mailBox);}
        let answer3 = await ask(">_");
    if (answer3.includes("read") || answer3.includes("open")){
     playerStats.iventory.push(firstletter1)
    console.log("Act1-Letter is in your invetory");
    callLetters();
 }}
if(answer.includes("body") || answer.includes("first body")){
    console.log("You see a dead frozen body, It looks like he is wearing a armor!")
     let answer5 = await ask(">_");
    if(answer5.includes("examine") || answer5.includes("open")){
       console.log(itemList.armor)
     let answer6 = await ask(">_");
    if(answer6.includes("equip") || answer6.includes("grab")){
   console.log(playerEquip.armor.push(itemList.armor))
    firstLvl1();
    }
     let answer7 = await ask(">_");
    if(answer7.includes("gremelin")){
    console.log("A Gremeling is walking towards you!");
}
if(answer.includes("attack")){
appearMOb();
}else{
    console.log("Wrong action you are back at the beggining!");
    firstLvl1();
}
 } 
  }
 }
}
////////////////////////////////Functions call letters\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
async function callLetters(){
    let firstletter = "Act 1 - Letter\n     The golden age of Elmoreden came about a thousand years after its establishment, during the reign of Emperor Zotac.\n With great charisma and leadership skills, Zotac created the strongest army in the history of the kingdom.\n This army drove the orcs, who had considerable influence in the northern parts of Elmore, into the black woods, known later as the Orc Kingdom.\n In addition, Zotac's army led repeated attacks against the kingdom of Perios, and eventually occupied the southern parts of Gracia.\n In his later years, Zotac lost interest in conquests and used his kingdom's forces to begin construction of an elaborate tower rising into the clouds. \n'My name inspires fear in every corner of the continent. Tens of thousands of lives can be lost or saved by the movement of my hand.\n My power is absolute. That I can only have this power for a few decades, I cannot bear! No -- I shall obtain everlasting life from the gods and rule my kingdom forever!' \n The magnificent tower of Zotac's design took thirty years to construct.\n He intended to use the tower to climb to the residence of the gods and obtain the secret of everlasting life. When he climbed the tower, the gods objected to his plans and gave him this response:\n 'Child of lowly humans, and a lowly human yourself: You dare to soil our abode for your own everlasting life? \nHave you learned nothing from the lesson of the giants? \nVery well, if eternal life is what you desire, we shall grant you your request. But you shall never leave your tower.'\n Having brought the fury of the gods upon himself, Zotac was trapped for all eternity at the top of his tower.\n After the sudden disappearance of the emperor, a fierce competition broke out among members of the royal family as each vied for ascension to the throne.\n Numerous aristocrats also seized the opportunity to stake their claim to the throne, leaving the entire kingdom of Elmoreden enmeshed in internal conflict.\n The costs and labor requirements for construction of the tower had already weakened the kingdom.\n The added conflict and backbiting over the vacant throne was the last straw. The resplendent kingdom of Elmoreden,\n  powerful on the continent for more than a thousand years fell into rapid decline. \n Within a mere twenty years, the kingdom was in shambles.\n"
     let callAnswer = await ask("Whant to read the letter?")
if( callAnswer.includes("yes") || callAnswer.includes("read")){
    console.log(firstletter);
    firstLvl1();
}
else if (callAnswer === "no" || callAnswer === "n"){ 
    firstLvl1();
}
 } 
 let firstletter1 = "Act1 - Letter"
}
   
//Mob function. FIX THIS  ( Infinnity loop)
 // hp is not lowering
 async function appearMOb(){
    let gremAttackMin = 3 ;
        let gremAttackMax =  17 ;
        let trueAttack = Math.floor(Math.random() * gremAttackMax ) + gremAttackMin;
        let mylife = 100;
    let maxNum = 3;
    let x = Math.floor(Math.random() * maxNum) + 1;
    let meuDano = power + sword.swordlvl1.power;
while (gremHP > 1 || gremHP <= 100){
        console.log("Chose between a number 1 or 2 , if you get the number wrong you will get some damage  (:");
        console.log(" If you get it right you will evade and give some damage back")
    let tentar = await ask (">_");
   if ( tentar === x){
       console.log("You avoid being attacked and attacked back!");
       console.log("Your attacked damage was"+ meuDano);
       console.log("Gremelin HP now is " + (gremHP - meuDano));
       gremHP = gremHP - meuDano;
       appearMOb();
       
 } if (tentar < x || tentar > x){
     console.log("You got attacked!")
    mylife = mylife - trueAttack 
     console.log("You lose " + trueAttack + "!");
     console.log("Your Hp now is" + mylife)                                                         }
                                                          }
if (gremHP === 0){
     console.log("You defeat Gremelin!")
     lootMonster()
}
 }
async function lootMonster(){
    console.log("Do you want to loot?")
    let answer4 = await ask(">_");
    let myinventory = mob.Gremelin.iventory
    if(answer4.includes("loot") || answer4.includes("open"));
      console.log("You grabed everything!\n");
      console.log(myinventory +playerStats.iventory);
goToBoss();
}
async function goToBoss(){
    console.log("The floor start shaking, car alarms triggered and a really dense fog!")
    console.log("Suddly, you can hear a deep laugh!\n");

    console.log("Zotac - MUHAHAHAAAA!!!")
    console.log("Who dares to wake me up!")
    console.log("Now you will feel the pain!!")
  startBossFight();
}
async function startBossFight(){
    var answer = Math.floor(Math.random() * 3) + 1;
console.log("The Boss rules => You have 5 chances to try to guess a number between 1-100!")
console.log("Eache time you get it wrong you lose 15HP")
while(bigBoos.HP > 1 || bigBoos.HP <= 100){
let bossAnswer = await ask(">_")
if (answer === bossAnswer){
    console.log("It was a critical hit!")
    console.log(" Coff Coff! This is not going to be the last time!")
    console.log(bigBoos.iventory);

let newlvl = await ask(">_");
if(newlvl.includes("walk") || newlvl.includes("789123")){
    startlvl2();
}
if(newlvl.includes("open") || newlvl.includes("grab")){
bigBoos.iventory.push(playerStats.iventory);
}
}
else if (answer > bossAnswer){
    console.log("Zotac - - HAHAHAH Try again its bigger then that!")
    guessCount--;
    console.log("Your Hp now is" + (playerLife - 15));
}
else if (answer < bossAnswer){
    console.log("Zotac - - HAHAHAH Try again its bigger then that!")
    guessCount--;
    console.log("Your HP now is" + (playerLife - 15));
}
 }
  }
    


   // LVL 2 
  async function startlvl2(){
     playerPosition.currentRoom = "182 Main St. - Foyer" ;
     console.log("You are now at Foyer!")
     console.log()
     while(playerPosition.currentRoom === "182 Main St. - Foyer"){
         let action = await ask(">_")
         if(action.includes("")){
             
         }
        }
    }