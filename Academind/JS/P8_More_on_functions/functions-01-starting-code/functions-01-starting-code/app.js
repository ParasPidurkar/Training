const startGameBtn = document.getElementById('start-game-btn');

//function inside obj i.e method

const person ={
    name :"Max",
    greet: function greet()
    {
        console.log("Hello There");
    }
}
// person.greet(); 

function startGame()
{
    console.log("Starting the game")
}
startGameBtn.addEventListener('click',person.greet);
// startGameBtn.addEventListener('click',startGame);
