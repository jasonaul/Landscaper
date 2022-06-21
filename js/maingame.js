console.log("Oh well.")


const player = {
    earnings: 0,
    tools: [
        "teeth", 
    ]
};

let tools = [
{   type: "Teeth",
    pay: 1,
},
{   type: "Scissors",
    pay: 5,
},
{   type: "Lawnmower",
    pay: 50,
},
{   type: "Gas Lawnmower",
    pay: 100,
},
{
    type: "Students",
    pay: 250,
}
];







const earnings1 = document.getElementById('earnings');
function earn1() {
    earnings1.innerHTML = player.earnings;
}



let moneyEarned = [];



function mowTeeth() {
   player.earnings ===  (player.earnings++)
/*     alert(`You've earned a buck! You have ${player.earnings}.`) */
    document.getElementById('earnings').innerHTML = "You have earned $" + player.earnings + ".";
 
        }

function mowScissors() {
    if (player.tools.includes("Scissors")){
    player.earnings ===  (player.earnings+=5)
        document.getElementById('earnings').innerHTML = "You have earned $" + player.earnings + ".";
    } else {
        alert("You need to buy the scissors first!")
    }
            }
         
////Buying Things

function buyScissors() {
    if (!player.tools.includes("Scissors")) {
     player.earnings === (player.earnings-=5)
    player.tools.push("Scissors")
    document.getElementById('earnings').innerHTML = "You have earned $" + player.earnings + ".";
    } else { (player.tools.includes("Scissors")) 
        alert("You already own the scissors!")
    }
}



console.log(player.earnings)
console.log(moneyEarned)













////Old code:

/* const lawnActual = document.getElementsByClassName('lawnActual');
console.log(lawnActual); */

/* document.getElementById("earnings").innerHTML = player.earnings; */

/* document.write(player.earnings) */

/* teeth.onclick = function(){player.earnings++}; */

/* var text = "$" + player.earnings;
document.getElementById("lawnActual").innerHTML = text;
 */


/* var earnings = 0;
function drawEarnings(){
    earnings.fillText = (earnings);
} */
