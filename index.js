const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function openToggle() {
    panels.forEach((panel) => {
      panel.classList.remove("open");
    });
    panel.classList.add("open");
  });
});

panels.forEach((panel) => {
  panel.addEventListener("transitionend", function activeToggle(e) {
    if (e.propertyName.includes("flex")) {
      panel.classList.toggle("open-active");
    }
  });
});
