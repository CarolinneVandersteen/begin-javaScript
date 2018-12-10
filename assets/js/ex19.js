/*De beste keuze
Maakt een array aan die 3 namen van acteurs bevat.

Geef elke acteur weer via de console. Bijv: "Nummer 1 is Stalone".

Bonus: transformeer de tekst naar: "De eerste is Stalone", de tweede is Cruiz", enz.....*/



let array2=["Stalone","LeBlanc","Lee"];
   resultaat=""
   for (var i = 0; i < array2.length; i++) {
       resultaat+="nummer "+(i+1)+" is "+array2[i]+" "
   }
   console.log(resultaat);
   resultaat="";
   for (var i = 0; i < array2.length; i++) {
       if (i===0) {
           resultaat+="de eerste is "+array2[i]+", ";
       } else {if (i===1) {
           resultaat+="de tweede is "+array2[i]+", ";
       } else {
           resultaat+="de derde is "+array2[i]+"."
       }
       }
   }
   console.log(resultaat);
