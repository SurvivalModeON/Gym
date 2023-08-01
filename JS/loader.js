document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.overflowX = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.overflowX = "hidden";
    document.querySelector("body").style.overflowY = "auto";
    document.querySelector("body").style.visibility = "visible";
  }
};
