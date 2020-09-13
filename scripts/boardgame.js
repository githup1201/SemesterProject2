
document.querySelector(".dice").addEventListener("click", function () {
    let rollerX = Math.floor(Math.random() * 4) + 1;
    let rollerY = Math.floor(Math.random() * 5) + 1;
    diceNumber.innerHTML = rollerX + 2;
    moveToken(rollerX, rollerY);

});

let players = [];
let traps = [];
let turn = 0;
let tokens = [];



function moveToken(randomNumberX, randomNumberY) {
    let playerTurn = players[turn % 2];
    if (randomNumberX !== 6) {
        turn++;    
    }
    
    if (randomNumberX === 4 && randomNumberY === 5) {
        window.location = "/final.html";
        
    }
    

function addPlayer(tokenUrl) {
    console.log("adding tokenUrl to token collection: ${tokenUrl}");
    if (randomNumberX === 4 && randomNumberY === 5) {
        players.push(tokenUrl);
        window.localStorage.setItem("myTokens", JSON.stringify(players));
        console.log(addPlayer);
    }
    
    
} 
    
    playerTurn.positionX = randomNumberX;
    playerTurn.positionY = randomNumberY;
    console.log("new player position: x: ${randomNumberX}, y: ${randomNumberY}")
    renderTiles()
}

function getTraps() {
    for (let i = 0; i < 5; i++) {
        let trapPositionX = Math.floor(Math.random() * 6) + 1;
        let trapPositionY = Math.floor(Math.random() * 5) + 1;
        traps.push({
            positionX: trapPositionX,
            positionY: trapPositionY
        })
    }
}

function getFromStorage() {
    let newTokens = JSON.parse(window.localStorage.getItem('myTokens'));
    console.log({playerTokens: newTokens});
    tokens = newTokens;
}

function getPlayers() {
    for (let i = 0; i < tokens.length; i++) {
        players.push({
            playerNumber: i + 1,
            playerIcon: tokens[i],
            positionX: 0,
            positionY: 0,
        });
    }
}

function renderTiles() {
    const tilesX = 5;
    const tilesY = 6;
    html = "";
    let continuePainting = true;
    const gameContainer = document.getElementById("game-container");
    
    for (let x = 0; x < tilesX; x++) {
        html += "<div class='row'>";
        
    for (let y = 0; y < tilesY; y++) {
        html += "<div class='tile'>";
        
        players.forEach(player => {
                
        if (player.positionX === x && player.positionY === y) {
                traps.forEach(trap => {
                        
        if (trap.positionX === x && trap.positionY === y) {
                 player.positionX = 0;
                 player.positionY = 0;
                 gameContainer.innerHTML = "";
                 console.log("A player hit a trap and must move back to start.")
                            alert("Player" + player.playerNumber + " has hit a trap and must move back to start.");
                            continuePainting = false;
         }
                    
       
    });
                 html += "<img id='player-" + player.playerNumber + "' class='tokenIcon' src='" + player.playerIcon + "'/>";
     }
 });
                 html += "</div>";
    }
                 html += "</div>"
    }
            if(continuePainting) {
               gameContainer.innerHTML = html;
                
            } else {
                 renderTiles();
    }
}

getFromStorage();
getTraps();
getPlayers();
renderTiles();   
  









