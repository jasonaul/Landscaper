console.log("Oh well.")


const player = {
    earnings: 0,
};








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
    player.earnings ===  (player.earnings+=5)
        document.getElementById('earnings').innerHTML = "You have earned $" + player.earnings + ".";
    
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
