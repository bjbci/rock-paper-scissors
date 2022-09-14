//pseudocode


var array=["r","p","s"]


var personChoice
var computerChoice
var result
var keepPlaying = true

var wins = 0
var losses = 0
var ties = 0

while(keepPlaying){

var personChoice
var computerChoice
var result


personChoice=prompt("enter your choice", "r,p or s")
console.log(personChoice)

computerChoice= array[computerChoice=Math.floor(Math.random()*3)]
console.log(computerChoice)
 
//computerChoice=Math.floor(Math.random()*3)
// console.log(computerChoice)



if ( personChoice == computerChoice){
  console.log("tie")
  ties++
  result="tied"
} else if ((personChoice === "r" && computerChoice === "s" )||
           (personChoice === "p" && computerChoice === "r") ||
           (personChoice === "s" && computerChoice === "p")) {
            console.log("player wins")
            wins++
            result="you won"
           }
     
else {
  console.log("computer wins")
  losses++
  result="you lost"
}

//console.log(result)

alert(result)

	alert("wins: "+ wins + "\n losses: " + losses + "\nties: " + ties, );  

  keepPlaying = confirm("do you want to continue?  ok for yes, or cancel for no")
}




