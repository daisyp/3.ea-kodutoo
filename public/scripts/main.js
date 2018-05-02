var data;
var to, from;
var j, k;

function result() {

    from = $('#convertFrom').find(":selected").text();
    to = $('#convertTo').find(":selected").text();

    $.getJSON("https://api.coinmarketcap.com/v1/ticker/" + from, getFrom);
    $.getJSON("https://api.coinmarketcap.com/v1/ticker/" + to, getTo);
    
    var discount = +((3/2).toFixed(2));
    $('#result').text(discount);

    let fadeTime = 200;
    console.log("s" + j + "d" + k);

    $('.all').css({"filter": "blur(5px)"})
    $('.popupResult').fadeIn(fadeTime)
    
}

function getFrom(json) {
    for (elem in json) {
        var j = json[elem]['price_usd']
    }
    console.log(j);
    return parseInt(j);
}
function getTo(json) {
    for (elem in json) {
        var k = json[elem]['price_usd']
    }
    console.log(k);
    return parseInt(k);
}

function getData(i) {
    data = i;

    let value = parseFloat(document.getElementById("valueInput").value);

    //console.log(value);

    

}

function fillUpOptions(json) {

    for(elem in json) {

        let newOption = "<option value='" + json[elem]['id'] + "'>" + json[elem]['id'] + "</option>"

        $("#convertFrom").append(newOption);
        $("#convertTo").append(newOption);

    }

}



//Options
$.getJSON("https://api.coinmarketcap.com/v1/ticker/?limit=10", fillUpOptions)

$(document).ready( function() {

    $('.convertBtn').click(function() {

        result();

    });

    $('.all').click(function() {

        let fadeTime = 100;

        $('.popupResult').fadeOut(fadeTime);
        $('.all').css({"filter": "blur(0px)"});

    })
    //Coinmarketcap link
    $('body').on('click', 'a', function(){
        chrome.tabs.create({url: 'https://coinmarketcap.com/'});
        return false;
    });

})
