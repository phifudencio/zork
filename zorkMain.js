/*  Try to see if hp is lowering and the loop of attacks is working
RE ENTER new Quotes,( refine the console.log)
Make lvl 2 History
make list of items 
and add new things to lvl 1*/

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}
start();
// test
/////////////////////////////////////Player \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let power = 10;
let playerLife = 100;
let playerStats = {
    currentRoom: "",
    iventory: [],
}

let playerEquip = {
    armor: "",
    boots: "",
    weapon: ""
}

var playerPosition = {
    currentRoom: ""

}
/////////////////////////////// Item List \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let itemList = {
    sword: 'sword',
    shield: 'shield',
    armor: 'OGE Shirt'
}
let sword = {
    swordlvl1: {
        name: "Katana",
        power: 47

    }

}
//////////////////////////// Boost Foods \\\\\\\\\\\\\\\\\\\\\\\\\\\\
let foods = {
    pizza: 'pizza',
    soda: 'coke',
    beer: 'beer'
}
///////////////////////////// MOBS --- BOSS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let gremHP = 100;
let mob = {
    Gremelin: {
        iventory: {
            wallet: "$" + 4.20 + " Dollars",
            sword: "Katana",
            boots: "Old pair of boots"

        },
        Gremelinlvl2: {
            iventory: {
                wallet: "$" + 4.20 + " Dollars",
                sword: "Katana",
                boots: "Old pair of boots"
    }
}}}

let bigBossHP = 100;
let bigBoos = {
    name: "Zotac",
    HP: 100,
    iventory: {
        armor: "North Face- Jacket",
        card: "Pass 789123"
    }
}
//DeadBodys
let deadlvl2 ={
    iventory: {
        wallet : "$42"
    },
    Pocket :{

    }
}
/////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let trash ={
    Useless: "",
    Pizza :"Mr.mike pizza",
    soda : "Coke"
}
    




/////////////////////////////LVLS--------ROOMS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//WEre you start 
let lvl1 = {
    name: "182 Main St.",
    romm: " A mail box , A dead body , A monster!\n",
    mailBox: "Act1-Letter"
}
//lvl2
let lvl2 ={
    name: "Foyer",
    rommAisle:{
    North: "Dead body, Trash Can, A Gremelin, A Beholder",
    northEast:""
    },
    description: "A Old Foyer, Cold with lamps and torches around the room,\n "
}
let npc1 = {
    Name : "",
    Dialog: "",
    Quest: ""
}
async function lvl2Npc(){
    function npc1(){

    }
}

async function northRoom(){
    console.log("You chosed the north path!")
    let answer = await ask(">_")
    if (answer.includes("check") || answer.includes("look")){
        console.log(lvl2.rommAisle.North)
    }
    else if(answer.includes("body")){
        console.log("You can see a dead Frozen Body!")
    }
    else if(answer.includes("examine")){
        console.log(deadlvl2.iventory)
    }
    else if(answer.includes("grab")){
        deadlvlvl2.iventory.push(playerStats.iventory)
    }
    else if(answer.includes("trash")){
        console.log("Stinky Trash can, i can smell it from down the street!")
        console.log(trash)
    }
    else if(answer.includes("")){
       
    }
}
async function EastRoom(){
    console.log("Walking down the NorthStreet, you can fell this felling of being watched all the time.")
    console.log("")
    let answer = await ask(">_")
    if(answer.includes("check")){
        console.log(lvl2.rommAisle.northEast);
    }
}
///// function if 1 attack else 


async function start() {
    let travelerName = await ask("Please chose the player name \n")
    let gameStart = await ask("Hello " + travelerName + " do you want to play the game ? \n");
    if (gameStart == 'yes' || gameStart == 'y') {
        startGame();
   }
   else{
       start();
   }
}
////////////////////////// Historia \\\\\\\\\\\\\\\\\\\\\\\\
async function startGame() {
    console.log("Welcome Traveler!\n")
    console.log("This is the beggining of your journey in 'The Green-Venture' ! PLEASE Follow the Rules.\n 1)Only type in lower case.\n 2)Dont use any punctuation \n")
    console.log("\nZotac is the last famous Emperor of Elmoreden, the creator of the BCA-Tower of Insolence, and the bringer of the Golden Age.\nHe is also the father of Frintezza, the last Emperor, and of Saint Solina.  ")
    console.log("So let Your journey beggin....\n");
    firstLvl1();
}


    /////////////// The journey \\\\\\\\\\\\\\\

    async function firstLvl1() {
        playerPosition.currentRoom = "182 Main St."
        console.log("Your are in " + lvl1.name + " you can see, \n" + lvl1.romm + " \n");
        while (playerPosition.currentRoom == "182 Main St.") {

            let answer = await ask(">_");
            if (answer.includes("mail box")) {
                console.log("You are near to a mail box , what could be inside ? \n");}
             else if (answer.includes("open") || answer.includes("examine")) {
                    console.log("You found " + lvl1.mailBox);
                }
               else if (answer.includes("read") || answer.includes("open")) {
                    playerStats.iventory.push(firstletter1)
                    console.log("Act1-Letter is in your invetory");
                    callLetters();
                }
            
             else if (answer.includes("body") || answer.includes("first body")) {
                console.log("You see a dead frozen body, It looks like he is wearing a armor!")
               }
              else  if (answer.includes('open') || answer.includes('examine')) {
                    console.log(itemList.armor)}
                  else  if (answer.includes("equip") || answer.includes("grab")) {
                        playerEquip.armor = itemList.armor;
                        console.log("You equiped OGE - Shirt! \n")
                        firstLvl1();
                    }
                
             else if (answer.includes("monster")) {
                        console.log("A Gremeling is walking towards you!");
                    }
                 else if (answer.includes("attack")) {
                        appearMOb();
                    } else {
                        console.log("Wrong action you are back at the beggining!");
                        firstLvl1();
                    }
                
            
        }
    }
    ////////////////////////////////Functions call letters\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    async function callLetters() {
        let firstletter = "Act 1 - Letter\n     The golden age of Elmoreden came about a thousand years after its establishment, during the reign of Emperor Zotac.\n With great charisma and leadership skills, Zotac created the strongest army in the history of the kingdom.\n This army drove the orcs, who had considerable influence in the northern parts of Elmore, into the black woods, known later as the Orc Kingdom.\n In addition, Zotac's army led repeated attacks against the kingdom of Perios, and eventually occupied the southern parts of Gracia.\n In his later years, Zotac lost interest in conquests and used his kingdom's forces to begin construction of an elaborate tower rising into the clouds. \n'My name inspires fear in every corner of the continent. Tens of thousands of lives can be lost or saved by the movement of my hand.\n My power is absolute. That I can only have this power for a few decades, I cannot bear! No -- I shall obtain everlasting life from the gods and rule my kingdom forever!' \n The magnificent tower of Zotac's design took thirty years to construct.\n He intended to use the tower to climb to the residence of the gods and obtain the secret of everlasting life. When he climbed the tower, the gods objected to his plans and gave him this response:\n 'Child of lowly humans, and a lowly human yourself: You dare to soil our abode for your own everlasting life? \nHave you learned nothing from the lesson of the giants? \nVery well, if eternal life is what you desire, we shall grant you your request. But you shall never leave your tower.'\n Having brought the fury of the gods upon himself, Zotac was trapped for all eternity at the top of his tower.\n After the sudden disappearance of the emperor, a fierce competition broke out among members of the royal family as each vied for ascension to the throne.\n Numerous aristocrats also seized the opportunity to stake their claim to the throne, leaving the entire kingdom of Elmoreden enmeshed in internal conflict.\n The costs and labor requirements for construction of the tower had already weakened the kingdom.\n The added conflict and backbiting over the vacant throne was the last straw. The resplendent kingdom of Elmoreden,\n  powerful on the continent for more than a thousand years fell into rapid decline. \n Within a mere twenty years, the kingdom was in shambles.\n"
        let callAnswer = await ask("Whant to read the letter?")
        if (callAnswer.includes("yes") || callAnswer.includes("read")) {
            console.log(firstletter);
            firstLvl1();
        }
        else if (callAnswer === "no" || callAnswer === "n") {
            firstLvl1();
        }
    }
    let firstletter1 = "Act1 - Letter"


//Mob function. FIX THIS  ( Infinnity loop)
// hp is not lowering
async function appearMOb() {
    let gremAttackMin = 3;
    let gremAttackMax = 17;
    let trueAttack = Math.random(gremAttackMin, gremAttackMax);
    let mylife = 100;
    let maxNum = 2;
    let x = Math.floor(Math.random() * maxNum) + 1;
    let meuDano = power + sword.swordlvl1.power;
    while (gremHP > 1 || gremHP <= 100) {
        console.log("Chose between a number 1 or 2 , if you get the number wrong you will get some damage  (:");
        console.log(" If you get it right you will evade and give some damage back")
        let tentar = await ask(">_");
        if (tentar === x) {
            console.log("You avoid being attacked and attacked back!");
            console.log("Your attacked damage was" + meuDano);
            console.log("Gremelin HP now is " + (gremHP - meuDano));
            gremHP = gremHP - meuDano;
            appearMOb();

        } if (tentar < x || tentar > x) {
            console.log("You got attacked!")
            mylife = mylife - trueAttack
            console.log("You lose " + trueAttack + "!");
            console.log("Your Hp now is" + mylife)
        }
    
          if (gremHP === 0) {
        console.log("You defeat Gremelin!")
        lootMonster()
    }
    }
}
async function lootMonster() {
    console.log("Do you want to loot?")
    let answer4 = await ask(">_");
    if (answer4.includes("loot") || answer4.includes("open"));
    console.log("You grabed everything!\n");
   mob.Gremelin.iventory.push(playerStats.iventory)
    goToBoss();
}
async function goToBoss() {
    console.log("The floor start shaking, car alarms triggered and a really dense fog!")
    console.log("Suddly, you can hear a deep laugh!\n");

    console.log("Zotac - MUHAHAHAAAA!!!")
    console.log("Who dares to wake me up!")
    console.log("Now you will feel the pain!!")
    startBossFight();
}
async function startBossFight() {
    var answer = Math.floor(Math.random() * 3) + 1;
    console.log("The Boss rules => You have 5 chances to try to guess a number between 1-100!")
    console.log("Eache time you get it wrong you lose 15HP")
    while (bigBoos.HP > 1 || bigBoos.HP <= 100) {
        let bossAnswer = await ask(">_")
        if (answer === bossAnswer) {
            console.log("It was a critical hit!")
            console.log(" Coff Coff! This is not going to be the last time!")
            console.log(bigBoos.iventory);
console.log("Please use the note from The Boss Iventory!")
            let newlvl = await ask(">_");
            if (newlvl.includes("walk") || newlvl.includes("789123")) {
                startlvl2();
            }
            if (newlvl.includes("open") || newlvl.includes("grab")) {
                bigBoos.iventory.push(playerStats.iventory);
            }
        }
        else if (answer > bossAnswer) {
            console.log("Zotac - - HAHAHAH Try again its bigger then that!")
          
            console.log("Your Hp now is" + (playerLife - 15));
        }
        else if (answer < bossAnswer) {
            console.log("Zotac - - HAHAHAH Try again its bigger then that!")
            
            console.log("Your HP now is" + (playerLife - 15));
        }
    }
}

/////////**********************************************************************************************************////////////////////////// */
/*Create  north and south paths,
South 
- maybe the moster cast a speel of sleep ( takes to another dimecion)
- a portal for another side boss
- */
async function startlvl2() {
    playerPosition.currentRoom = "182 Main St. - Foyer";
console.log("Chose the right path thru the dungeon, and find the Eye of Beyond- Guarded by a powerful Beholder!\n")
    while (playerPosition.currentRoom === "182 Main St. - Foyer") {    console.log("You are now at Foyer! " + lvl2.description)
    console.log("You find yourself in a Strange Foyer, you have to find the ")
        let action = await ask(">_")
        if (action.includes("look around") || action.includes("look") || action.includes("check")) {
          console.log(lvl2.rommAisle)
        }
     else if (action.includes("north")){
         northRoom();
         }
     else if (action.includes("east")){
         console.log("You chosed the  East  path!")
         EastRoom()
     }



    async function mob() {
      
        let gremAttackMax = 17;
        let trueAttack = Math.floor(Math.random() * gremAttackMax) + 3;
        let mylife = 100;
        let maxNum = 2;
        let x = Math.floor(Math.random() * maxNum);
        let meuDano = power + sword.swordlvl1.power;
        while (gremHP > 1 || gremHP <= 100) {
            console.log("Chose between a number 1 or 2 , if you get the number wrong you will get some damage  (:");
            console.log(" If you get it right you will evade and give some damage back")
            let tentar = await ask(">_");
            if (tentar === x) {
                console.log("You avoid being attacked and attacked back!");
                console.log("Your attacked damage was" + meuDano);
                console.log("Gremelin HP now is " + (gremHP - meuDano));
                gremHP = gremHP - meuDano;
                mob();
    
            } if (tentar < x || tentar > x) {
                console.log("You got attacked!")
                mylife = mylife - trueAttack
                console.log("You lose " + trueAttack + "!");
                console.log("Your Hp now is" + mylife)
            }
        
        if (gremHP === 0) {
            console.log("You defeat Gremelin!")
            lootMonster()
        }}
    }
    async function lootMonster() {
        console.log("Do you want to loot?")
        let answer4 = await ask(">_");
        if (answer4.includes("loot") || answer4.includes("open"));
        console.log("You grabed everything!\n");
       mob.Gremelin.iventory.push(playerStats.iventory)
        behemot();
    }
    
    async function behemot() {
        console.log("")
        var answer = Math.floor(Math.random() * 3) + 1;
        console.log("The Boss rules => You have 5 chances to try to guess a number between 1-100!")
        console.log("Eache time you get it wrong you lose 15HP")
        while (bigBoos.HP > 1 || bigBoos.HP <= 100) {
            let bossAnswer = await ask(">_")
            if (answer === bossAnswer) {
                console.log("It was a critical hit!")
                console.log(" Coff Coff! This is not going to be the last time!")
                console.log(bigBoos.iventory);
    
                let newlvl = await ask(">_");
                if (newlvl.includes("walk") || newlvl.includes("789123")) {
                    startlvl2();
                }
                if (newlvl.includes("open") || newlvl.includes("grab")) {
                    bigBoos.iventory.push(playerStats.iventory);
                }
            }
            else if (answer > bossAnswer) {
                console.log("Zotac - - HAHAHAH Try again its bigger then that!")
              
                console.log("Your Hp now is" + (playerLife - 15));
            }
            else if (answer < bossAnswer) {
                console.log("Zotac - - HAHAHAH Try again its bigger then that!")
                
                console.log("Your HP now is" + (playerLife - 15));
            }
        }
      
    }
  
   
    }
    }

/*

Do first
--Need update Fight function,( infinity loop)
*Hp is lowering bellow 0
*Need 1Fix random attack function

Working on it--( It will take a while)
-- Items(Weapons, armors, consumables)

*Add different classes for the game
--Each classe will drop your only weapons and armors, and spells!

* Game History



*/ 