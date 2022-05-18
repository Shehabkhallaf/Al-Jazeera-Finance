let boxes = document.querySelectorAll(".box-item");
let indicators = document.getElementsByClassName("slide_btn");
boxes[0].style.display = "block";
indicators[0].classList.add("active");
function slide(sliderIndex) {
  if (sliderIndex) {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.display = "none";
      indicators[i].classList.remove("active");
    }
    boxes[sliderIndex].style.display = "block";
    indicators[sliderIndex].classList.add("active");
  } else {
    let i = 0;
    setInterval(function () {
      boxes.forEach((box, i) => {
        box.style.display = "none";
        indicators[i].classList.remove("active");
      });
      if (i == boxes.length) {
        i = 0;
      }
      boxes[i].style.display = "block";
      indicators[i].classList.add("active");
      i++;
    }, 2000);
  }
}
slide();

function getselectValue() { 
  let selectVal = document.getElementById("selectId").value;
  if (selectVal === "Arabic") {
    document.getElementsByTagName("body")[0].style.direction = "rtl"; 
  }else{
    document.getElementsByTagName("body")[0].style.direction = "ltr"; 
  }
}
