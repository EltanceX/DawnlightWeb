export function initFadeInObserver() {
  const fadeTargets = document.querySelectorAll(".fade-in");
  if (!fadeTargets.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    fadeTargets.forEach(element => element.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  fadeTargets.forEach(element => observer.observe(element));
}
