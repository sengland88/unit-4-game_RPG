$(document).ready(function () {

    $(".yourSelections").hide()

    let thePlayer
    let theDefender

    let players = {
        korra: {
            "name": "Korra",
            "ability": "The Avatar",
            "hp": 150,
            "ap": 6,
            "cap": 21,
        },
        mako: {
            "name": "Mako",
            "ability": "Fire Bending",
            "hp": 130,
            "ap": 4,
            "cap": 17,
        },
        asami: {
            "name": "Asami",
            "ability" : "Intelligence",
            "hp": 110,
            "ap": 3,
            "cap": 15,
        },
        bolin: {
            "name": "Bolin",
            "ability": "Earth Bending",
            "hp": 140,
            "ap": 5,
            "cap": 19
        }
    }


    $(".image").on("click", function () {
        if(thePlayer === $(this).attr("value") || theDefender === $(this).attr("value")) return false;
        
        if (!thePlayer) {
            //move player to your-player section
            //set choosePlayer to true
            thePlayer = $(this).attr("value");
            $("#your-player").append($(this));
            $("#playerHP").html(`${players[thePlayer].name} HP is ${players[thePlayer].hp}`)
            $(".yourSelections").show()
            
        } else {
            //move player to defender section
            //move remaining players to opponents section
            theDefender = $(this).attr("value");
            $("#defender").append($(this));
            $("#players").children().each(function(){
                $(this).appendTo($("#opponents"));
            $("#defenderHP").html(`${players[theDefender].name} HP is ${players[theDefender].hp}`) 
        
            })
        }
    })


    //attack function
    $("#attk-button").on("click", function () {

        console.log(players[theDefender].hp)
        // console.log(theDefender[hp])

       

        players[theDefender].hp = players[theDefender].hp - players[thePlayer].ap
        console.log(`defender hp is ${players[theDefender].hp}`)

        players[thePlayer].hp = players[thePlayer].hp - players[theDefender].cap
        console.log(`player hp is ${players[thePlayer].hp}`)

        $("#theInfo").html(`${players[thePlayer].name} attacked ${players[theDefender].name} and did ${players[thePlayer].ap} ap worth of damage.`)

        $("#playerHP").html(`${players[thePlayer].name}'s HP is now ${players[thePlayer].hp}`)
        $("#defenderHP").html(`${players[theDefender].name}'s HP is now ${players[theDefender].hp}`)        


        players[thePlayer].ap = players[thePlayer].ap + players[thePlayer].cap
        console.log(`player ap is ${players[thePlayer].ap}`)


        if ($("#defender").children().length === 3) {
            $("#defender").children().hide()
            Swal.fire(
                'You Won!',
              )         
            theRestart()
        }

        if (players[theDefender].hp <= 0) {
            //choose another player from the opponent div
            $("#defenderHP").html(`${players[theDefender].name} is dead`)
            $("#defender").children().hide();
            theDefender = "";

        }

        if (players[thePlayer].hp <= 0) {
            Swal.fire(
                'You Died!',
              )    
            theRestart()       
        } // if statement end bracket
      
        
    
    }) // attk-button on.click end bracket

function theRestart() {
    console.log("Restart")
    
    $("#your-player").children().each(function(){
        $(this).appendTo($("#players"))
    })

    $("#defender").children().show().each(function(){
        $(this).appendTo($("#players"))
    })

    $("#theInfo").empty()
    $("#playerHP").empty()
    $("#defenderHP").empty()

    thePlayer = ""
    theDefender = ""

    players = {
        korra: {
            "name": "Korra",
            "ability": "The Avatar",
            "hp": 150,
            "ap": 6,
            "cap": 6
        },
        mako: {
            "name": "Mako",
            "ability": "Fire Bending",
            "hp": 130,
            "ap": 4,
            "cap": 4
        },
        asami: {
            "name": "Asami",
            "ability" : "Intelligence",
            "hp": 110,
            "ap": 3,
            "cap": 3
        },
        bolin: {
            "name": "Bolin",
            "ability": "Earth Bending",
            "hp": 140,
            "ap": 5,
            "cap": 5
        }
    }

}


}) //ready function closing brackets