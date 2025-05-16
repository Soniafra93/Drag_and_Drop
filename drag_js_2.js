// Javascript Drag and Drop number 2

var dragItem = document.querySelector(".dragElement");
var dropZoneSet = Array.from(document.querySelectorAll(".dropZone"));

dropZoneSet.forEach((dropzone) => {
  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.appendChild(dragItem);
  });
});

dropZoneSet.forEach((dropZone) => {
  dropZone.addEventListener("dragover", () => {
    dropZone.classList.add("hoverOver");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("hoverOver");
  });
});
