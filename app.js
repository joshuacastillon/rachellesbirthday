const body = document.body;
const sections = document.querySelectorAll("section");

let options = {
  threshold: 0.5,
};

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const color = entry.target.getAttribute("data-color");
      if (color) {
        body.style.backgroundColor = color;
      }
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);

sections.forEach((section) => {
  observer.observe(section);
});
