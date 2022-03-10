var text1 = "je bent gehackt";
var text2 = "grapje";
var text3 = "Veel plezier op de websites";
var count = 20

let meld = document.getElementById("melding");
let hahaha = document.getElementById("haha");
let webb = document.getElementById("websites");
let extra = document.getElementById("extra")

melding = function () {
  alert(text1);
  alert(text2);
  alert(text3);
};

web = function () {
  open("https://duckduckgo.com/");
  open("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Articles_insolites");
  open("/pranks/prank1.html");
};

haha = function () {
  for (let i = 1; i < 10; i++) {
    if (i > 5) {
      console.log("ha" * 5);
    } else {
      console.log("ha" * i);
    }
  }
};

extra.ondblclick = function() {
    console.log(55)

}

extra.onclick = function(count) {
    console.log(count);
    count++
}

meld.onclick = function () {
  melding();
  console.log(text1);
};

hahaha.onclick = function () {
  haha();
  console.log("succes");
};

webb.onclick = function () {
  web();
  console.log("zijn ze geopend");
};


hahaha.onselect = function() {
    console.log('selected');
}

hahaha.ondragover = function() {
    console.log('goodbye');
}

window.ondblclick = function() {
  haha();
  melding();
  web();
}
