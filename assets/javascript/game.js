let korra = {
    "name" : "Korra",
    "hp" : 150,
    "ap" : 11,    
}

let mako = {
    "name" : "Mako",
    "hp" : 130,
    "ap" : 7,
}

let asami = {
    "name" : "Asami",
    "hp" : 110,
    "ap" : 5,
}

let bolin = {
    "name" : "Bolin",
    "hp" : 140,
    "ap" : 8,
}

let thePlayer
let theDefender
let choosePlayer = false;
let chooseDefender = false;


console.log(korra)
console.log(mako)
console.log(asami)
console.log(bolin)

$(document).ready(function() {

    $("#pickPlayer").on("click", function(){
        

    

    })




// when player clicks attack:
    //grab button using 
    $("#attk-button").on("click", function() {
        // console.log("you click the button!")
        thePlayer = korra
        theDefender = 

        
        // subtract player ap from opponents from hp
        theDefender.hp = theDefender.hp - thePlayer.ap
        console.log(`original ap is ${thePlayer.ap}`)

        // subtract opponents ap from player hp
        thePlayer.hp = thePlayer.hp - theDefender.ap


        // display results on screen (hp, ap, cap)
        $("#fightingDiv").html("blah blah blah")
        
        // double players ap
        thePlayer.ap = thePlayer.ap + thePlayer.ap
        console.log(`players ap is ${thePlayer.ap}.`)
        console.log(thePlayer.name , thePlayer.ap , thePlayer.hp)
        console.log(theDefender.name , theDefender.ap , theDefender.hp)

        // condition that checks hp for both player and opponent
        if (thePlayer.hp <= 0) {
            // if player hp is zero, game over        
            console.log("game over")
            //trigger reset function        
        }
            // if opponenets hp is zero
        if (theDefender.hp <= 0) {
            //choose another player from the opponent div
            console.log("pick another opponent")
        }   
        // select another opponent
        // repeat process
    })




}) //ready function closing brackets

