/*Willekeurig 3
Maak een array aan die de volgende waarden bevat: Goro, Johnny Cago, Kano, Liu Kano, Raiden, Raptile, Scorpion, Shang Tsun, Sonya, Sub-Zero.
Kies een willekeurig waarde uit de array en geef die weer in de console.$*/



//oefening 4 math

namenArray = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Raptile", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];


willekeurig = Math.floor(Math.random() * (namenArray.length + 1));
console.log(namenArray[willekeurig]);




/*parseFloat();               //parseFloat() parses a string and returns a floating point number.
parseInt();                 //parseInt() parses a string and returns an integer.*/
