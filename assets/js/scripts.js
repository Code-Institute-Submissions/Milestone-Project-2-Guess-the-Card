/*----------------------------------------Global Variables*/
const baseURL = "https://api.scryfall.com/cards/random?q=set:thb ft:/.+/"
var card1 = []
var newScore = 5;
var decrement = 1;
var callId = "";
/*----------------------------------------Standard Functions*/
/*--------------------Data Functions*/
function getData(cb) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL);
    xhr.send();

    xhr.onreadystatechange = function () {
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
    card1.push(data.name, data.flavor_text, data.colors, data.type_line, data.cmc, data.image_uris.normal);
    console.log(card1);
}
/*----------------------------------------onClick Functions*/

$("#newGameButton").click(function () {
    $("#newGameCanvas").fadeIn(1000);
})

$(".startButton").click(function guessTheCard(name) {

    var callID = $(this).attr("id");
    console.log(callID);
    if (callID == "newGameYes") {
        $(".stickyButton").removeAttr("disabled");
        $("#scoreNum").html(3);
        $("#livesNum").html(5);
        $(".clueButton").fadeIn(1000);
        $("#clue1").removeClass(card1[2]);
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
            $("#clue1").removeClass(card1[2]);
            $(".clueButton").fadeIn(1000);
            setTimeout(function () {
                $("#scoreNum").removeClass("flashUp");
                $("#flavourTextCol").removeClass("flashUp");
            }, 1000);
            getData(printData);
        } else {
            $("#livesNum").html(Number(life) - decrement);
            $("#livesNum").addClass("flashDown");
            $("#flavourTextCol").addClass("flashDown");
            $("#guessInput").val("");
            $("#clue1").removeClass(card1[2]);
            $(".clueButton").fadeIn(1000);
            setTimeout(function () {
                $("#livesNum").removeClass("flashDown");
                $("#flavourTextCol").removeClass("flashDown");
            }, 1000)
            getData(printData);
        };
    };
});

$(".clueButton").click(function () {

    var score = $("#scoreNum").html();

    if ($(this).attr("id") == "cButton1") {
        $("#clue1").addClass(card1[2]);
        $(this).fadeOut(1000);
        $("#scoreNum").html(Number(score) - decrement);
        $("#scoreNum").addClass("flashDown");
        setTimeout(function () {
            $("#scoreNum").removeClass("flashDown");
        }, 1000)
    } else {
        console.log("No!");
    };
});