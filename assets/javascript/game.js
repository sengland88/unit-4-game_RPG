$(document).ready(function() {

let thePlayer
let theDefender
let choosePlayer = false;
let chooseDefender = false;

let korra = {
"name" : "Korra",
"hp" : 150,
"ap" : 12,
"cap" : 6,
}

let mako = {
    "name" : "Mako",
    "hp" : 130,
    "ap" : 8,
    "cap" : 4,
}

let asami = {
    "name" : "Asami",
    "hp" : 110,
    "ap" : 6,
    "cap" : 3,
}

let bolin = {
    "name" : "Bolin",
    "hp" : 140,
    "ap" : 10,
    "cap" : 5
}




console.log(korra)
console.log(mako)
console.log(asami)
console.log(bolin)



    $(".image").on("click" , function(){

        

    })



//attack function
    $("#attk-button").on("click", function() {

        thePlayer = 
        theDefender =    

        theDefender.hp = theDefender.hp - thePlayer.ap
        thePlayer.hp = thePlayer.hp - theDefender.cap
        $("#fightingDiv").html(korra.image)

        thePlayer.ap = thePlayer.ap + thePlayer.ap       

        if (thePlayer.hp <= 0) {
            console.log("game over")
            //trigger reset function        
        }
        if (theDefender.hp <= 0) {
            //choose another player from the opponent div
            console.log("pick another opponent")
        }   
    })




}) //ready function closing brackets

