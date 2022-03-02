const h1 = document.querySelector("h2");
const clickedClass = "active";

// console.log(window.innerWidth);
// function handleWindowResize() {
//   let newBgColor;
//   if (window.innerWidth > 1200) {
//     newBgColor = "blue";
//   } else if (800 < window.innerWidth < 1200) {
//     newBgColor = "red";
//   } else if (window.innerWidth <= 800) {
//     newBgColor = "black";
//   }
//   document.body.style.backgroundColor = newBgColor;
// }

// window.addEventListener("resize", handleWindowResize);

const body = document.querySelector("body");

function handleWindowSize() {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 900) {
    body.className = "windowSmall";
  } else if (windowWidth > 900 && windowWidth <= 1400) {
    body.className = "windowMedium";
  } else {
    body.className = "windowLarge";
  }
}

window.addEventListener("resize", handleWindowSize);

// //
// const body = document.querySelector("body");
// let windowWidth = window.innerWidth;
// console.log(windowWidth);
// const BgLarge = "windowLarge";
// const BgMedium = "windowMedium";
// const BgSmall = "windowSmall";

// function handleWindowSize() {
//   if (windowWidth <= 500) {
//     body.classList.remove(BgMedium, BgLarge);
//     body.classList.add(BgSmall);
//   } else if (windowWidth > 500 && windowWidth <= 900) {
//     body.classList.remove(BgSmall, BgLarge);
//     body.classList.add(BgMedium);
//   } else {
//     body.classList.remove(BgSmall, BgMedium);
//     body.classList.add(BgLarge);
//   }
// }

// window.addEventListener("resize", handleWindowSize);

//

const superEventHandler = {
  // 어랴 세가지는 다 같은 기능을 하는데 toggle이 제일 간단하지? const로 변수를 새로 정의할 필요도 없어 한번만 쓰니까
  h1Click: function () {
    h1.classList.toggle("active");
  },

  // h1Click: function () {
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }
  // },

  // const superEventHandler = {
  //   h1Click: function () {
  //     const currentColor = h1.style.color;
  //     let newColor;
  //     if (currentColor === "blue") {
  //       newColor = "tomato";
  //     } else {
  //       newColor = "blue";
  //     }
  //     h1.style.color = newColor;
  //   },

  // ---------------------------------------

  // mouseEnter: function () {
  //   h1.innerText = "Mouse is here!";
  // },
  // mouseLeave: function () {
  //   h1.innerText = "Mouse is gone!";
  // },
  // windowResize: function () {
  //   h1.innerText = "You just resized!";
  //   document.body.style.backgroundColor = "tomato";
  // },
  // windowCopy: function () {
  //   alert("copier!");
  // },
  // windowOffline: function () {
  //   alert("SOS no WIFI");
  // },
  // windowOnline: function () {
  //   alert("ALL GOOD!!");
  // },
};

// h1.onclick = superEventHandler.h1Click;
// h1.onmouseenter = superEventHandler.mouseEnter;
h1.addEventListener("click", superEventHandler.h1Click);

// h1.addEventListener("mouseenter", superEventHandler.mouseEnter);
// h1.addEventListener("mouseleave", superEventHandler.mouseLeave);

// window.addEventListener("resize", superEventHandler.windowResize);
// window.addEventListener("copy", superEventHandler.windowCopy);
// window.addEventListener("offline", superEventHandler.windowOffline);
// window.addEventListener("online", superEventHandler.windowOnline);

// console.log(superEventHandler.windowResize);
