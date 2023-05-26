var popup = document.querySelector("#mypopup");

var button = document.querySelector("#myBtn");

var close = document.getElementsByClassName("close")[0];

button.onclick = function() {
  popup.style.display = "block";
}

close.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}