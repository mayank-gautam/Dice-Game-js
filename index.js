function getRandomNumber() {
    return Math.floor(Math.random()*6)+1;
}

var firstPlayerScore = getRandomNumber();
document.querySelector(".dice-img1").setAttribute("src","Dices//dice" + firstPlayerScore + ".png");

var secondPlayerScore = getRandomNumber();
document.querySelector(".dice-img2").setAttribute("src", "Dices//dice"+ secondPlayerScore+".png");

if(firstPlayerScore>secondPlayerScore){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}else if(firstPlayerScore<secondPlayerScore){
    document.querySelector("h1").innerHTML = "Player 2  wins🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}


