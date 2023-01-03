let div = document.createElement("div");
div.id = "focus-border";
div.style.position = "absolute";
div.style.left = 0;
div.style.top = 0;
div.style.width = "100%";
div.style.height = "100%";
div.style.zIndex = 100;
div.style.border = "solid 2px #7f7f7f";
div.style.pointerEvents = "none";
div.style.userSelect = "none";

document.getElementsByTagName("body")[0].appendChild(div);

window.addEventListener("blur", moveFocusBorder);
document.addEventListener("focusin", moveFocusBorder); // I think this is what you meant

function moveFocusBorder() {
  for (element of document.querySelectorAll(
    ".panel,.sidebar,.editor-group-container"
  )) {
    if (
      (element === document.activeElement ||
        element.contains(document.activeElement)) &&
      document.hasFocus()
    ) {
      let rect = element.getBoundingClientRect();

      document.getElementById("focus-border").style.left = rect.left + "px";
      document.getElementById("focus-border").style.top = rect.top + "px";
      document.getElementById("focus-border").style.width =
        rect.right - rect.left - 5 + "px";
      document.getElementById("focus-border").style.height =
        rect.bottom - rect.top + "px";

      document.getElementById("focus-border").style.display = "block";
      return;
    }
  }
  // hide the div if we're not in a tracked element
  document.getElementById("focus-border").style.display = "none";
}
