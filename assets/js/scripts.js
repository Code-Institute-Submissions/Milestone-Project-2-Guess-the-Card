const baseURL = "https://api.scryfall.com/cards/random?q=set:thb ft:/.+/"
var card1 = []
var newScore = 5;
var decrement = 1;
var callID = "";

function getData(cb) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printData(data) {
        $("#newGameCanvas").fadeOut(1000);
        console.dir(data);
        $('#flavourTextData').html(data.flavor_text);
        card1 = [];
        card1.push(data.name, data.flavor_text, data.set_name, data.type_line, data.image_uris.normal);
        console.log(card1);
    }

$(".startButton").click(function guessTheCard(name) {
    var callID = $(this).attr("id");
    console.log(callID);
    if (callID == "newGameYes") {
        $("#scoreNum").html(0);
        $("#livesNum").html(5);
        getData(printData);
    } else if (callID == "guessSub") {
    var name = $("#guessInput").val();
    var score = $("#scoreNum").html();
    var life = $("#livesNum").html();
    
    if (name == card1[0]) {
        $("#scoreNum").html(Number(score) + newScore);
        $("#scoreNum").addClass("flashUp");
        $("#flavourTextCol").addClass("flashUp");
        $("#guessInput").val("");
        setTimeout(function(){ 
            $("#scoreNum").removeClass("flashUp");
            $("#flavourTextCol").removeClass("flashUp");
        }, 1000);
        getData(printData);
    } else {
        $("#livesNum").html(Number(life) - decrement);
        $("#livesNum").addClass("flashDown");
        $("#flavourTextCol").addClass("flashDown");
        $("#guessInput").val("");
        setTimeout(function(){ 
            $("#livesNum").removeClass("flashDown"); 
            $("#flavourTextCol").removeClass("flashDown");
        }, 1000)
        getData(printData);
    };
    };
});

$(".clueButton").click(function() {
    if ($(this).attr("id") == "cButton1") {
        $(this).fadeOut(1000);
        $("#clue1").html(card1[2]);
    } else {
        console.log("No!");
    };
    
});

$("#newGameButton").click(function() {
    $("#newGameCanvas").fadeIn(1000);
})