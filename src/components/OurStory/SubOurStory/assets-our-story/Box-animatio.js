let box = document.querySelector("#box");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");

function dotColor(box) {
   let numSteps = 5000.0;

   let boxElement;
   let prevRatio = 0.0;
   let increasingColor = "#33ffc2";
   let decreasingColor = "#03011a";

   window.addEventListener("load", (event) => {
      boxElement = box

      createObserver();
   }, false);

   function createObserver() {
      let observer;

      let options = {
         root: null,
         rootMargin: "-150px",
         threshold: 1
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(boxElement);
   }

   function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
         if (entry.intersectionRatio > prevRatio) {
            entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
         } else {
            entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
         }

         prevRatio = entry.intersectionRatio;
      });
   }
}

dotColor(box)
dotColor(box2)
dotColor(box3)
dotColor(box4)
