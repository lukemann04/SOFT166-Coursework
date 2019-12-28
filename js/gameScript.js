var colours = [];
var userInput = [];
var gameTimer;
var sequenceNumber = 0;
var currentLight = 0;
var result = "";

function selectedLight(l) {
    currentLight = l;
}

function selectNextColour()
{
    sequenceNumber=0;
    var nextColour =  Math.floor((Math.random() * 4) + 1);
    if (nextColour == 1)
    {
        colours.push("red");
        setLights(currentLight, 0, 'On', 100, 254)

    }
    else if (nextColour == 2)
    {
        colours.push("green");
        setLights(currentLight, 25500, 'On', 100, 254)
    }
    else if (nextColour == 3)
    {
        colours.push("blue");
        setLights(currentLight, 46920, 'On', 100, 254)
    }
    else if (nextColour == 4)
    {
        colours.push("yellow");
        setLights(currentLight, 12750, 'On', 100, 254)
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


function saveInput(num)
    {
       if (num == 1)
       {
           userInput.push("red");
       }
       if (num == 2)
       {
           userInput.push("Green");
       }
        if (num == 3)
        {
            userInput.push("blue");
        }
        if (num == 4)
        {
            userInput.push("yellow");
        }
        checkInput()
    }

function checkInput()
    {
        if (colours.length == userInput.length) {
            if (JSON.stringify(colours) == JSON.stringify(userInput)) {
                result = "correct"
            } else {
                result = "incorrect"
            }
        }
    }
