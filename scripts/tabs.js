var stage1Info = document.querySelector(".fourth-block-stage1");
var stage2Info = document.querySelector(".fourth-block-stage2");
var stage3Info = document.querySelector(".fourth-block-stage3");
var stage4Info = document.querySelector(".fourth-block-stage4");


var tab1 = document.getElementById("stage1");
var tab2 = document.getElementById("stage2");
var tab3 = document.getElementById("stage3");
var tab4 = document.getElementById("stage4");

tab1.addEventListener("click", () => {
  if (!tab1.classList.contains("tab-active")){
  tab1.classList.add("tab-active");
  stage1Info.classList.remove("hide");

  tab2.classList.remove("tab-active");
  stage2Info.classList.add("hide");
  tab3.classList.remove("tab-active");
  stage3Info.classList.add("hide");
  tab4.classList.remove("tab-active");
  stage4Info.classList.add("hide");
  }
})

tab2.addEventListener("click", () => {
  if (!tab2.classList.contains("tab-active")){
  tab2.classList.add("tab-active");
  stage2Info.classList.remove("hide");
  
  tab1.classList.remove("tab-active");
  stage1Info.classList.add("hide");
  tab3.classList.remove("tab-active");
  stage3Info.classList.add("hide");
  tab4.classList.remove("tab-active");
  stage4Info.classList.add("hide");
  }
})

tab3.addEventListener("click", () => {
  if (!tab3.classList.contains("tab-active")){
  tab3.classList.add("tab-active");
  stage3Info.classList.remove("hide");
  
  tab1.classList.remove("tab-active");
  stage1Info.classList.add("hide");
  tab2.classList.remove("tab-active");
  stage2Info.classList.add("hide");
  tab4.classList.remove("tab-active");
  stage4Info.classList.add("hide");
  }
})

tab4.addEventListener("click", () => {
  if (!tab4.classList.contains("tab-active")){
  tab4.classList.add("tab-active");
  stage4Info.classList.remove("hide");
  
  tab1.classList.remove("tab-active");
  stage1Info.classList.add("hide");
  tab2.classList.remove("tab-active");
  stage2Info.classList.add("hide");
  tab3.classList.remove("tab-active");
  stage3Info.classList.add("hide");
  }
})