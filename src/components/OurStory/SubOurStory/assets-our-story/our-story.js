/* sezione Karim  */
let counter = 0;
let right = document.getElementById("right");
let divone = document.getElementById("divone");
let left = document.getElementById("left");

addEventListener("resize", (event) => {
  const cards = document.querySelectorAll(".divscritto");
  for (let divscritto of cards) {
    divscritto.style.width = event.currentTarget.innerWidth * 0.1 + "px";
  }
});
addEventListener("resize", (event) => {
  const cardino = document.querySelectorAll(".slideroo");
  for (let card of cardino) {
    card.style.width = event.currentTarget.innerWidth + "px";
  }
});

right.onclick = function () {
  const widthCard = -(window.innerWidth * 0.65) * counter;

  if (counter < document.querySelectorAll(".slideroo").length) {
    {
      counter++;
      divone.style.transform = "translateX(" + widthCard + "px)";
    }
  }
};

left.onclick = function () {
  counter--;
  const widthCard = window.innerWidth * 0.65 * counter;

  if (divone.style.transform != "translateX(0px)") {
    divone.style.transform = "translateX(" + -widthCard + "px)";
  } else if ((divone.style.transform = "translateX(0px)")) {
    left.onclick = function () {
      stop;
    };
  }
};

/* Fine Parte Karim */