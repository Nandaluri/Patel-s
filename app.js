const button = document.querySelector(".button");
const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");

button.onclick = function () {
  if (info1.style.display == "none") {
    info1.style.display = "block";
    info2.style.display = "none";
  } else {
    info1.style.display = "none";
    info2.style.display = "block";
  }
};
