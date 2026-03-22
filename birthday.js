const button = document.getElementById("wishButton");
const message = document.getElementById("hiddenMessage");
let span = document.getElementById("name");

const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];

button.addEventListener("click", function () {
  // message.style.display = "block";

  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    /* random color */
    balloon.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    /* random position */
    balloon.style.left = Math.random() * 100 + "vw";

    /* random speed */
    balloon.style.animationDuration = Math.random() * 3 + 4 + "s";

    const string = document.createElement("div");
    string.className = "string";

    balloon.appendChild(string);

    document.body.appendChild(balloon);
    // remove balloon after animation ends
    setTimeout(() => {
      balloon.remove();
    }, 7000);
  }
});
/* when button clicked */
button.addEventListener("click", function () {
  message.style.display = "block";
  button.style.display = "none";
  span.innerText = "Shubham";
});

/* when message clicked */
message.addEventListener("click", function () {
  message.style.display = "none";
  button.style.display = "block";
  button.style.margin = "auto";
});
