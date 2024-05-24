const paragraphElements = document.querySelectorAll("p", "li");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("paragraph-visible");
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: 0.5, // Trigger the animation when the element is 50% visible
  }
);

paragraphElements.forEach((paragraph) => {
  observer.observe(paragraph);
});
