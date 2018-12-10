/*Piramide
Schrijf een lus die in de console (lijn voor lijn) het volgende resultaat zal tekenen
*
* *
* * *
* * * *
* * * * *
*/

resultaat="";
for (var i = 1; i<=5; i++) {
var count = 1;
while (count <=i) {
    resultaat+="* "
    count+=1;
}
console.log(resultaat);
resultaat="";
}
