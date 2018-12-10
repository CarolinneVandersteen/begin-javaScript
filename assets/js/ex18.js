/*Optellen
Creëer een array die de volgende waarden bevat: 1, 2, 3, 3, 4, 5, 6, 7, 8, 9.
Maak een lus die al deze waarden bij elkaar optelt.*/



let array1=[1,2,3,4,5,6,7,8,9];
   resultaat=0;
   for (var i = 0; i < array1.length; i++) {
       resultaat+=array1[i];
   }
   console.log(resultaat);
