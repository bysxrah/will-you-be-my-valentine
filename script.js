function openPopover() {
  document.getElementById("popover").classList.add("show");
}

function closePopover(event) {
  // Only close if clicking outside envelope
  if (event.target.id === "popover") {
    document.getElementById("popover").classList.remove("show");
  }
}
