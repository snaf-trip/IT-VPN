var upBtn = document.querySelector(".UP-BTN");

window.addEventListener("scroll", function () {
  pageY = pageYOffset;
  // console.log(pageY);

  if (pageY >= 1400 && pageY < 5700 ) {
    upBtn.classList.add("up-btton")
    upBtn.classList.remove("no-fix")
  } else if (pageY >= 5700) {
    upBtn.classList.remove("up-btton")
    upBtn.classList.add("no-fix")
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

