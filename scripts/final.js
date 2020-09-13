
var canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
    }

var textPath = 0;

function drawText(textPath) {
    var color = "#d4af37";
    var text = "You have won !!";
    ctx.font = "32px Times new roman";
    ctx.fillStyle = color;
    ctx.fillText(text,textPath,80,80);
}

var updateText = setInterval(function() {
    ctx.clearRect(0,0,1000,400);
    drawText(textPath%500);
    textPath++;
},12);

 