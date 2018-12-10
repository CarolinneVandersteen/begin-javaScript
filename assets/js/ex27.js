/*haracter objecten
Creëer een "mainCharacter" object dat de volgende eigenschappen heeft:

name (string)
level (int)
life (int)
weapon (object)
attack (function)
Creëer een "weapon"-object met de volgende eigenschappen:

name (string)
damage (int)
Creëer een "attack" functie van het personage

de functie moet terug geven:
(Name character) aanval met het wapen (weapon name) de schade is (level vermenigvuldigd met de schade van het wapen)*/


let weapon = {
        name : "dragonslayer",
        damage : 10
    };
let mainCharacter = {
        name : "carol",
        level : 4,
        life : 100,
        wapen: weapon,
        attack : function(){
            console.log(this.name + " aanval met het wapen "+ weapon.name + " de schade is "+ this.level*weapon.damage );
        }

    };

mainCharacter.attack();
