var dragonDamage = document.body.querySelector(".dragonDamage");
var humanDamage = document.body.querySelector(".humanDamage");
var humanHealth = document.body.querySelector(".humanHealth");
var dragonHealth = document.body.querySelector(".dragonHealth");
var Ending1 = document.body.querySelector(".Ending1");
var humanHealth = 5;
var dragonHealth = 10;

while(dragonHealth>=0 || humanHealth>=0){
var humanDamage = prompt("How many hits will you take, pick a number between 1 and 5");

 if(isNaN(humanDamage)){
   body.document.querySelector(".Ending1").innerHTML = "You have not attempted any hits."
 }
  
if(humanDamage>5){
var humanDamage = 1 
}
var humanDamage = Math.floor(Math.random() * humanDamage + 1);
var dragonDamage = Math.floor((Math.random() * 2) + 1);

 humanHealth = humanHealth - dragonDamage;
 dragonHealth = dragonHealth - humanDamage;
}
if(0>=dragonHealth){
document.body.querySelector(".Ending1").innerHTML = ("You have deafeated the dragon, you win.");
}
if(0>=humanHealth){
document.body.querySelector(".Ending1").innerHTML = ("You have been slain by the dragon, you lose.");
}

document.body.querySelector(".humanHealth").innerHTML = humanHealth;
document.body.querySelector(".dragonHealth").innerHTML = dragonHealth;