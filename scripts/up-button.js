var upBtn = document.querySelector(".UP-BTN");
var fourthBlock = document.querySelector(".fourth-block-stage4");
var thridBlock = document.querySelector(".thrid-block");

var screenHeight = screen.height; //высота экрана пользователя
// console.log(screenHeight);

window.addEventListener("scroll", function () {
  pageY = pageYOffset;
  
    if (pageY >= 1800 && pageY < 5700 && fourthBlock.classList.contains("hide")) {
      upBtn.classList.add("up-btton")
    } else if (pageY < 1800) {
      upBtn.classList.remove("up-btton")
    } 
});

upBtn.addEventListener("click", function () {
  thridBlock.scrollIntoView({behavior: "smooth"});
})

