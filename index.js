const panels = document.querySelectorAll(".panel");

let timesClicked = 0;

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    timesClicked++;
    if (timesClicked % 2 == 0) {
      removeActiveClasses();
      panel.classList.add("active");
    } else {
      removeActiveClasses();
    }
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
