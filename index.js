var randonNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randonNumber1 +".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randonNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "dice" + randonNumber2 +".png";

var randomImageSource2 = "images/" + randomDiceImage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randonNumber1>randonNumber2){
    document.querySelector("h1").innerHTML="🚩Player-1 winss!🚩"
}else if(randonNumber1<randonNumber2){
    document.querySelector("h1").innerHTML="🚩Player-2 winss!🚩"
}else{
    document.querySelector("h1").innerHTML="Draw!😁"
}