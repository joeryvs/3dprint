<<<<<<< HEAD
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

var menu_open = (idd) => {
  document.getElementById(idd).classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  // console.log("click");
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
=======
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

var menu_open = (idd) => {
  document.getElementById(idd).classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  // console.log("click");
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
>>>>>>> ad6b4115474dd5b06c8f347e64586fb7c98f2845
