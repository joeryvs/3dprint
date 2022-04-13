console.log("geimporteerd");

const bank1 = document.getElementById("bank");
const bank2 = document.getElementsByName("bank");
const betaal1 = document.getElementById("betaal");
const betaal2 = document.getElementsByName("bedrag");
var h1 = document.getElementsByTagName("h1");

console.log(h1);

function bank_log() {
  console.log(bank1);
  console.log(bank2);
}

function betaal_log() {
  console.log(betaal1);
  console.log(betaal2);
}

function show_input() {
  let n1 = bank1.inputMode;
  let n2 = betaal1.inputMode;
  console.log(n1, n2);
  if (n1 == "") {
    console.log("empty");
  }
}



function boxes_info() {
  bank_log();
  console.error("break");
  betaal_log();
}

function form_info() {
    var z = document.betaalform;
  console.log(z);
  console.log(z.item);
  console.log(z.length);
}



window.ondblclick = function () {
    isItDone = !isItDone
    console.log(isItDone)
    form_info();
};

let isItDone = false

document.betaalform.onsubmit = function() {
    console.log("nice try")
    
    return isItDone
}
// boxes_info();