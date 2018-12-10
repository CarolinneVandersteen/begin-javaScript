/*
Oefeningen: Functies
Rekenmachine
Maak de volgende functies:

Functie die aftrekkingen doet

Functie die divisies maakt

Functie die vermenigvuldigingen maakt

Functie die percentages berekent ( 2 argumenten: waarde en percentage) bijvoorbeeld: "50% van 10 = 5";

Maak een functie die snelheidsberekeningen maakt (2 parameters: afstand, tijd in uur) Het resultaat moet bijvoorbeeld zijn:'50km/u'*/


    var minus=function minus(a,b) {
        return a-b;
    }
    var division=function division(a,b) {
        return a/b;
    }
    var multi=function multi(a,b) {
        return a*b;
    }
    var perc=function perc(a,b) {
        return a*b/100;
    }
    var speed=function speed(a,b) {
        return a/b + "km/u"
    }
    console.log(speed(120,2))   /*60km/u*/
