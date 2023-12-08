document.addEventListener("DOMContentLoaded", () => {
  const WIDTH = 360;
  const logo = document.getElementById("biel-logo");
  logo.addEventListener("mouseenter", (e) => {});
  logo.addEventListener("mousemove", (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    logo.style.background = `radial-gradient(at ${x}px ${y}px, #204069, #a50052 40%) no-repeat`;
    logo.style.backgroundSize = `${WIDTH}px ${WIDTH}px`;
  });
  logo.addEventListener("mouseleave", (e) => {
    logo.style.backgroundSize = `${WIDTH * 5}px ${WIDTH * 5}px`;
  });
});
