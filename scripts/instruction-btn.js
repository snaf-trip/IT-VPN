var instBtn = document.querySelector(".first-block-btn");
var firstBlock = document.querySelector(".second-block");
// 1350
var screenWidth = screen.width;
console.log(screenWidth);



if (screenWidth >= 1350) {
  instBtn.addEventListener("click", function() {
  goBottom();
})
} else {
  instBtn.addEventListener("click", function() {
  goBottomMobile();
})
}



function goBottom() {
    if (window.pageYOffset < 1000) {
      window.scrollBy(0, 80);
      setTimeout(goBottom, 0);
    }
  }
function goBottomMobile() {
  firstBlock.scrollIntoView({behavior: "smooth"});
}