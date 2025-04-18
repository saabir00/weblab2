const headers = document.querySelectorAll("h1, h2, h3");

headers.forEach(header => {
  header.addEventListener("mouseenter", () => {
    header.style.transition = "all 0.3s ease";
    header.style.color ="FF0000";
    header.style.transform = "scale(1.05)";
  });

  header.addEventListener("mouseleave", () => {
    header.style.color = "";
    header.style.transform = "scale(1)";
  });
});

console.log("Resume page loaded");