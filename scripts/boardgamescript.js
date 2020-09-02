const token = document.querySelector("#token");
const diceNumber = document.querySelector("#diceNumber");
token.style.left = "0";
token.style.top = "0";

document.querySelector(".dice").addEventListener("click", function() {
    let roller = Math.floor(Math.random() * 6) + 1;
    diceNumber.innerHTML = roller;
    moveToken(roller);
    
})

function moveToken(randomNumber) {
    let currentPosition = token.style.left;
    let topPosition = token.style.top;
    currentPosition = parseInt(currentPosition, 10);
    topPosition = parseInt(topPosition, 10);
    
    console.log(randomNumber);
    randomNumber = randomNumber * 10;
    let moves = currentPosition + randomNumber;
    let topmoves = topPosition + randomNumber;
    token.style.left = moves + "px";
    token.style.top = topmoves + "px";
    
    
}









