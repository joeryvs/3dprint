console.log("geimporteerd")

const bank1 = document.getElementById("bank");
const bank2 = document.getElementsByName("bank");
const betaal1 = document.getElementById("betaal")
const betaal2 = document.getElementsByName("bedrag")


let par1 = document.getElementById("bank")
let par2 = document.getElementById("bedrag")

var bank_log = function() {
    console.log(bank1);
    console.log(bank2);
}

let betaal_log = function () {
    console.log(betaal1);
    console.log(betaal2);
}


bank_log();
console.error("break");
betaal_log();


window.ondblclick = function() {
    par1.innerText = "bank"
    let g = par1.inputMode 
    par2.innerText = "bank"
    console.log(g);
}