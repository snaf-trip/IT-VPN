var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var next3 = document.getElementById("next3");
var back2 = document.getElementById("back2");
var next4 = document.getElementById("next4");
var back3 = document.getElementById("back3");

const forScroll = document.getElementById("tabs-title");

next2.addEventListener("click", () => {
 
  tab2.classList.add("tab-active");
  stage2Info.classList.remove("hide");
  tab1.classList.remove("tab-active");
  stage1Info.classList.add("hide");

  forScroll.scrollIntoView({behavior: "smooth"});
  
})

back1.addEventListener("click", () => {
 
  tab1.classList.add("tab-active");
  stage1Info.classList.remove("hide");
  tab2.classList.remove("tab-active");
  stage2Info.classList.add("hide");

  forScroll.scrollIntoView({behavior: "smooth"});
  
})

next3.addEventListener("click", () => {
 
  tab3.classList.add("tab-active");
  stage3Info.classList.remove("hide");
  tab2.classList.remove("tab-active");
  stage2Info.classList.add("hide");

  forScroll.scrollIntoView({behavior: "smooth"});
  
})

back2.addEventListener("click", () => {
 
  tab2.classList.add("tab-active");
  stage2Info.classList.remove("hide");
  tab3.classList.remove("tab-active");
  stage3Info.classList.add("hide");

  forScroll.scrollIntoView({behavior: "smooth"});
  
})

next4.addEventListener("click", () => {
 
  tab4.classList.add("tab-active");
  stage4Info.classList.remove("hide");
  tab3.classList.remove("tab-active");
  stage3Info.classList.add("hide");

  forScroll.scrollIntoView({behavior: "smooth"});
  
})

back3.addEventListener("click", () => {
 
  tab3.classList.add("tab-active");
  stage3Info.classList.remove("hide");
  tab4.classList.remove("tab-active");
  stage4Info.classList.add("hide");

  forScroll.scrollIntoView({behavior: "smooth"});
  
})