var data;
var to, from;
var j, k;

function result() {

    from = $('#convertFrom').find(":selected").text();
    to = $('#convertTo').find(":selected").text();

    $.getJSON("https://api.coinmarketcap.com/v1/ticker/" + from, function (json) {
      for (elem in json) {
        j = json[elem]['price_usd'];
      }
      console.log(j);
    });
    $.getJSON("https://api.coinmarketcap.com/v1/ticker/" + to, function (json) {
      for (elem in json) {
        k = json[elem]['price_usd'];
      }
      console.log(k);
      finalResult();

    });
}

function finalResult () {
  console.log(j);
  console.log(k);
  var discount = +((j/k).toFixed(2));
  console.log(discount);
  $('#result').text(discount);

  let fadeTime = 200;
  console.log("s" + j + "d" + k);

  $('.all').css({"filter": "blur(5px)"});
  $('.popupResult').fadeIn(fadeTime);
}

function getData(i) {
    data = i;

    let value = parseFloat(document.getElementById("valueInput").value);

    //console.log(value);

    

}

function fillUpOptions(json) {

    for(elem in json) {

        let newOption = "<option value='" + json[elem]['id'] + "'>" + json[elem]['id'] + "</option>";

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
