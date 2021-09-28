
const scrollButtonRight = document.getElementById("scrollPageRight");
const scrollButtonLeft = document.getElementById("scrollPageLeft");
scrollButtonRight.onclick = function () {
  document.getElementById("selectGroupsId").scrollLeft += 100;
};
scrollButtonLeft.onclick = function () {
  document.getElementById("selectGroupsId").scrollLeft -= 100;
};



//side nav
function toggleNavbar() {
  let checkClass = document.getElementById("side-navbar");
  console.log(checkClass);
  if (checkClass.className === "navbar") {
    checkClass.className += "close";
  } else {
    checkClass.className = "navbar";
  }
}