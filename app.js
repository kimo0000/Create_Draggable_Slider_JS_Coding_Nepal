const boxImgs = document.querySelector(".box_images"),
  btns = document.querySelectorAll(".icon i"),
  img = boxImgs.querySelectorAll("img")[0];

let isDraggable = false,
  imgWidth = img.clientWidth + 5,
  prevPageX,
  scrollLeftEl;

const handlBtn = () => {
  const scrollValue = Math.ceil(boxImgs.scrollLeft);
  const maxScrollWidth = boxImgs.scrollWidth - boxImgs.clientWidth;
  // console.log(scrollValue, maxScrollWidth);
  btns[0].style.display = boxImgs.scrollLeft == 0 ? "none" : "flex";
  btns[1].style.display = scrollValue >= maxScrollWidth ? "none" : "flex";
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    boxImgs.scrollLeft += btn.id === "right" ? imgWidth : -imgWidth;
    handlBtn();
  });
});

const dragStart = (e) => {
  isDraggable = true;
  prevPageX = e.pageX;
  scrollLeftEl = boxImgs.scrollLeft;
  // console.log(prevPageX, scrollLeftEl);
};

const dragging = (e) => {
  if (!isDraggable) return;
  boxImgs.classList.add("draggable");
  let diffPageX = e.pageX - prevPageX;
  // console.log(scrollLeftEl);
  // console.log(diffPageX);
  // console.log(scrollLeftEl - diffPageX);
  boxImgs.scrollLeft = scrollLeftEl - diffPageX;
  // console.log(e.pageX);
  handlBtn();
};

const draggStop = () => {
  isDraggable = false;
  boxImgs.classList.remove("draggable");
};

boxImgs.addEventListener("mousedown", dragStart);
boxImgs.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", draggStop);
