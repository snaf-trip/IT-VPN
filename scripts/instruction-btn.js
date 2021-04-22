var instBtn = document.querySelector(".first-block-btn");

instBtn.addEventListener("click", function() {
  goBottom();
})

function goBottom() {
    if (window.pageYOffset < 1000) {
      window.scrollBy(0, 80);
      setTimeout(goBottom, 0);
    }
  }