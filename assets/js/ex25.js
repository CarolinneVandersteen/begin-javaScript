/*Oefeningen: Objecten*/

/*Non-player character
Creëer een "character"-object dat de volgende informatie bevat:
name (string)
age (number)
items_to_give (array)
Geef elke informatie op een aparte regel in de console weer
Maak een "giveItem"-functie waarmee de NPC een object willekeurig kan mee geven*/



let character = {
        name : "carolinne";
        age : 46;
        items_to_give: ["ring","halsketting","horloge"],
        giveItem : function(a){
            console.log( this.items_to_give[a] );
        }
    };

for(let key in character){
        console.log( key );
        console.log( character[key] );
    }
randomNumber = Math.floor(Math.random() * (3));
character.giveItem(randomNumber);
