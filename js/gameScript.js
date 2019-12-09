var colours = [];
var gameTimer;
var sequenceNumber = 0;
function selectNextColour()
{
    sequenceNumber=0;
    var nextColour =  Math.floor((Math.random() * 4) + 1);
    if (nextColour == 1)
    {
        colours.push("red");
    }
    else if (nextColour == 2)
    {
        colours.push("green");
    }
    else if (nextColour == 3)
    {
        colours.push("blue");
    }
    else if (nextColour == 4)
    {
        colours.push("yellow");
    }

    if (colours[colours.length-1]==colours[colours.length-2]){
        colours.pop();
        selectNextColour();
    }
    else { showSequence(); }
}

function showSequence()
{
    gameTimer = setInterval(showColour, 1000);

}

function showColour()
    {
        if (sequenceNumber == colours.length)
        {
            $('#TheBody .sidenav').css({'backgroundColor':''});
            clearInterval(gameTimer);
        }
        else {
            var currentColour = colours[sequenceNumber];
            $('#TheBody .sidenav').css({'backgroundColor': currentColour});
        }
        sequenceNumber++;
    }

