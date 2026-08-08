const openButton = document.getElementById("openButton");
const message = document.getElementById("message");

openButton.addEventListener("click", function() {
  message.style.display = "block";
  openButton.style.display = "none";
});
