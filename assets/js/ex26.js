/* Shop -objecten
Creëer een array met object te koop (zwaard, bijl, scepter, enz.)

Kenmerkend voor dit object:
title (string)
physic (int)
magic (int)
minLevel (int)
available (boolean)

Maak een functie om alle objecten weer te geven

Maak een functie om de beschikbare objecten weer te geven

Maak een functie om objecten met een minimumniveau van 10 weer te geven*/


function MyFirstConstructor(title, physic, magic level, available) {
        this.title = title;
        this.physic = physic;
        this.magic = magic;
        this.minLevel = level;
        this.available = available;
    };
let zwaard = new MyFirstConstructor("dragonsword",150,20,10,true);
let bijl = new MyFirstConstructor("battleaxe",100,0,5,false);
let scepter = new MyFirstConstructor("magicscepter",0,150,20,true);

/* array objecten te koop*/

weaponArray = [zwaard,bijl,scepter];

for (i=0;i<weaponArray.length;i++){
    console.log(weaponArray[i].title);
}

for (i=0;i<weaponArray.length;i++){
    if (weaponArray[i].available === true){
        console.log(weaponArray[i].title);
    }

}

for (i=0;i<weaponArray.length;i++){
    if (weaponArray[i].minLevel >=10){
        console.log(weaponArray[i].title);
    }

}
