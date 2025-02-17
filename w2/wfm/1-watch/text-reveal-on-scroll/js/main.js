// Meer info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".content p");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);
  elements.forEach(function (element) {
    observer.observe(element);
  });
});
