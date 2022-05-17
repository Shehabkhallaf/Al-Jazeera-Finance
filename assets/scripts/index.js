let boxes = document.getElementsByClassName("box-item");
let indicators = document.getElementsByClassName("slide_btn");
boxes[0].style.display = "block";
indicators[0].classList.add("active");
function slide(sliderIndex) {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
    indicators[i].classList.remove("active");
  }
  boxes[sliderIndex].style.display = "block";
  indicators[sliderIndex].classList.add("active");
}
