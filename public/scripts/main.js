var data;
var to, from;

function result() {

    from = $('#convertFrom').find(":selected").text();

    $.getJSON("https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=" + from, getData);

    to = $('#convertTo').find(":selected").text();
}

function getData(i) {
    data = i;

    let value = parseFloat(document.getElementById("valueInput").value);

    //console.log(value);

    let strResult = to == from ? value + " " + to : Number((i["rates"][to] * value).toFixed(4)) + " " + to;

    $('#result').text(strResult);

    let fadeTime = 200;

    $('.all').css({"filter": "blur(5px)"})
    $('.popupResult').fadeIn(fadeTime)

}

function fillUpOptions(i) {

    let keys = Object.keys(i["rates"]);

    for(i in keys) {

        let newOption = "<option value='" + keys[i] + "'>" + keys[i] + "</option>"

        $("#convertFrom").append(newOption);
        $("#convertTo").append(newOption);

    }

}
//Options
$.getJSON("https://api.coinmarketcap.com/v1/ticker/bitcoin/", fillUpOptions)

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
