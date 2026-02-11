const yes = document.querySelector(".yes");
const popover = document.getElementById("popover");

yes.addEventListener("click", () => {
  popover.classList.add("show");
});

popover.addEventListener("click", () => {
  popover.classList.remove("show");
});
