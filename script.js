document.addEventListener("DOMContentLoaded", () => {
  const ctaBtn = document.querySelector(".cta");
  const darkBtn = document.getElementById("toggle-dark");

  if (ctaBtn) {
    ctaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Welkom bij de community! Binnenkort kun je je hier aanmelden.");
    });
  }

  // Donkere modus toggle
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      darkBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  // Scroll-in animaties (extra)
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});
