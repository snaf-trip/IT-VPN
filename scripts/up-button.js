var upBtn = document.querySelector(".UP-BTN");

var screenHeight = screen.height; //высота экрана пользователя
console.log(screenHeight);

window.addEventListener("scroll", function () {
  pageY = pageYOffset;
  // console.log(pageY);

  if (screenHeight === 830 || screenHeight === 900) {
    // console.log(900);
    if (pageY >= 1800 && pageY < 5700 ) {
      upBtn.classList.add("up-btton")
      upBtn.classList.remove("no-fix")
    } else if (pageY < 1800) {
      upBtn.classList.remove("up-btton")
    } else if (pageY >= 5700) {
      upBtn.classList.remove("up-btton")
      upBtn.classList.add("no-fix")
    } 
  }
});

function backToTop() {
    if (window.pageYOffset > 1735) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

upBtn.addEventListener("click", function () {
  backToTop()
})

