
fetch("https://raw.githubusercontent.com/githup1201/AnApiOfIceAndFire/master/data/characters.json")
    .then (function(response) {
      return response.json();
  })
    .then (function(json) {
      loopCharacters(json);
  })
    .catch (function(error) {
        console.log(error);
  });
    

function loopCharacters(characterObject) {
    character = characterObject;
    const resultContainer = document.getElementById("card");
 
    
    let nameArray = [character[582].Name, character[237].Name, character[1051].Name, character[956].Name, character[953].Name, character[147].Name, character[207].Name, character[270].Name, character[564].Name, character[215].Name];
    
    let titleArray = [character[582].Titles, character[237].Titles[4], character[1051].Titles[0], character[956].Titles, character[953].Titles + "Lord of Horn Hill", character[147].Titles, character[207].Titles, character[270].Titles, character[564].Titles[1], character[215].Titles + "Knight of House Tarth"];
    
    let aliasArray = [character[582].Aliases[0], character[237].Aliases, character[1051].Aliases[0], character[956].Aliases[0], character[953].Aliases[0], character[147].Aliases[2], character[207].Aliases[1], character[270].Aliases + "Mother of Dragons", character[564].Aliases[0], character[215].Aliases[1]];
    
    let houseArray = ["Night Watch", "House Lannister", "House Lannister", "House Stark", "Night Watch", "House Stark", "House Stark", "House Targaryen", "House Baratheon", "House Tarth"];
    
    let btnText = "select ";
    let btnCap = btnText.toUpperCase();
    let number = [1,2,3,4,5,6,7,8,9,10];
    let playerId = [character[582].Name, character[237].Name, character[1051].Name, character[956].Name, character[953].Name, character[147].Name, character[207].Name, character[270].Name, character[564].Name, character[215].Name];
    let tokens = ["tokens/token1.svg","tokens/token2.svg","tokens/token3.svg","tokens/token4.svg","tokens/token5.svg","tokens/token6.svg","tokens/token7.svg","tokens/token8.svg","tokens/token9.svg","tokens/token10.svg"];
   
        
    for (let i = 0; i < playerId.length; i++) {    
    resultContainer.innerHTML += "<div class=cards> " + "<h2> " + nameArray[i] + "</h2> " + "<hr>"  + "<p><i>" + " Alias: "  + aliasArray[i] + "</p></i>" + "<img src='" + tokens[i] + "'>" + "<h3>" + titleArray[i] + "</h3>  " + "<button class=select>" + "<big> " + " </big>" + playerId[i] + "</br>" + btnCap + "</button>" + "<h4> " + houseArray[i] + "</h4>" + "</div>";
     
    document.querySelector(".select").addEventListener("click", function() { 
        
         
    })
        
        
      
   
        
      
       
           
        
    }
    
}




