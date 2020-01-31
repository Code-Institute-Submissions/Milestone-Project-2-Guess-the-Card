const baseURL = "https://api.scryfall.com/cards/random?q=ft:/.+/"
var card1 = []
var card2 = []
var card3 = []
var card4 = []
var card5 = []

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




