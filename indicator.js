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
div.style.boxShadow = "0 0 7px #7f7f7f";

document.getElementsByTagName("body")[0].appendChild(div);

window.addEventListener("blur", moveFocusBorder);
window.addEventListener("transitionstart", moveFocusBorder);
document.addEventListener("focusin", moveFocusBorder);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function moveFocusBorder() {
  await sleep(1);
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
        rect.right - rect.left - 4 + "px";
      document.getElementById("focus-border").style.height =
        rect.bottom - rect.top - 4 + "px";

      document.getElementById("focus-border").style.display = "block";
      return;
    }
  }
  // hide the div if we're not in a tracked element
  document.getElementById("focus-border").style.display = "none";
}
