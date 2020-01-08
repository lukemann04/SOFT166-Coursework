var colours = [];
var userInput = [];
var gameTimer;
var sequenceNumber = 0;
var currentLight = 1;
var result = "";
var i = 0;
//var victoryTimer;
var counter = 0;
var scoreCounter = 0;
var resetScore = "False";

function selectedLight(l) {
    currentLight = l;
}

function selectNextColour()
{
    if (resetScore == "True")
    {
        scoreCounter = 0;
        document.getElementById('scoreCount').innerHTML = scoreCounter.toString();
    }
    $('#TheBody .sidenav').css({'backgroundColor':''});
    userInput = [];
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
    counter = 0;
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
           userInput.push("green");
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
            i = colours.length;
            if (JSON.stringify(colours) == JSON.stringify(userInput)) {
                result = "correct";
                userInput = [];
                $('#TheBody .sidenav').css({'backgroundColor': 'green'});
                setLights(currentLight, 25500, 'On', 100, 254)
                scoreCounter++;
                document.getElementById('scoreCount').innerHTML = scoreCounter.toString();
                //victoryTime();
            } else {
                result = "incorrect";
                userInput = [];
                colours = [];
                $('#TheBody .sidenav').css({'backgroundColor': 'red'});
                setLights(currentLight, 0, 'On', 100, 254)
                document.getElementById('scoreCount').innerHTML = scoreCounter.toString();
                resetScore = "True";
                //victoryTime();
            }
        }
        if (userInput.length > colours.length){
            result = "incorrect";
        }
    }

 // function victoryTime()
 // {
 //         victoryTimer = setInterval(correctOrNot, 500)
 // }


 // function correctOrNot(res)
 // {
 //     res = result;
 //     //if (counter < 3) {
 //         if (res == "correct") {
 //             $('#TheBody .sidenav').css({'backgroundColor': 'green'});
 //             counter++;
 //         }
 //         if (res == "incorrect") {
 //             $('#TheBody .sidenav').css({'backgroundColor': 'red'});
 //             counter++;
 //         }
 //     //}
 // }
