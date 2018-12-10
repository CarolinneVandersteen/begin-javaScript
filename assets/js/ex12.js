
//oefening 3 loops
let ranks;
for (let i=0;i<=100;i++){
    if (i<65){
        ranks = "F";
    } else if (i<70){
        ranks = "D"
    } else if (i<80){
        ranks= "C";
    } else if (i<90){
        ranks= "B";
    }else{
        ranks= "A";
    }
    console.log("Voor "+i+" punten krijgt u rank "+ ranks);
}
