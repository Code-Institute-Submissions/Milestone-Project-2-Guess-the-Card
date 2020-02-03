const baseURL = "https://api.scryfall.com/cards/random?q=set:thb ft:/.+/"
var card1 = []
var newScore = 5;
var decrement = 1;

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
        console.dir(data);
        $('#flavourTextData').html(data.flavor_text);
        card1 = [];
        card1.push(data.name, data.flavor_text, data.set_name, data.type_line, data.image_uris.normal);
        console.log(card1);
    }

function guessTheCard(name) {
    
    var name = $("#guessInput").val();
    var score = $("#scoreNum").html();
    var life = $("#livesNum").html();

    if (name == card1[0]) {
        $("#scoreNum").html(Number(score) + newScore);
        $("#guessInput").val("");
        getData(printData);
    } else {
        console.log("Opps!");
        $("#livesNum").html(Number(life) - decrement);
    };
}

$(".clueButton").click(function() {
    if ($(this).attr("id") == "cButton1") {
        $(this).fadeOut(1000);
        $("#clue1").html(card1[2]);
    } else {
        console.log("No!");
    };
    
});