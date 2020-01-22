const baseURL = "https://api.scryfall.com/cards/random"
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
    if (data.flavor_text == undefined) {
        getData(printData);
    } else {
        console.dir(data);
        document.getElementById("data").innerHTML = data.flavor_text;
        card1.push(data.flavor_text, data.set_name, data.type_line, data.image_uris.normal);
    }
}

getData(printData);

console.log(card1);



