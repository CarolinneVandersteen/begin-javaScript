/*Scoren toewijzen
Schrijf een lus die zal itereren van 0 tot 100
Schrijf een functie die de rangschikking van de scores weergeeft op basis van de ontvangen scores
als de score boven de 90 is, is het cijfer A
als de score boven de 80 ligt, is het cijfer B
als de score hoger is dan 70 is het cijfer C
als de score boven de 65 is, is het cijfer D
als de score niet in deze categorieën valt, is het cijfer F
Geef in de console het resultaat weer, bijvoorbeeld: "Voor 82 punten heb je graad B".*/


for (var i = 0; i <=100; i++) {
        if (i>90) {
            console.log("Voor "+i+" punten heb je graad A");
        } else {if (i>80) {
            console.log("Voor "+i+" punten heb je graad B");
        } else {if (i>70) {
            console.log("Voor "+i+" punten heb je graad C");
        } else {if (i>65) {
            console.log("Voor "+i+" punten heb je graad D");
        } else {
            console.log("Voor "+i+" punten heb je graad F");
        }
        }
        }
        }
    }
