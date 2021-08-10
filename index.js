const panels = document.querySelectorAll(".panel");

function openToggle() {
  panels.forEach((panel) => {
    panel.classList.remove("open");
  });
  this.classList.add("open");
}

function activeToggle(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => {
  panel.addEventListener("click", openToggle);
});

panels.forEach((panel) => {
  panel.addEventListener("transitionend", activeToggle);
});
