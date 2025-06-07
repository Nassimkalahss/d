// Welkomstbericht bij klikken op 'Word lid'
document.addEventListener("DOMContentLoaded", function () {
  const ctaBtn = document.querySelector(".cta");

  if (ctaBtn) {
    ctaBtn.addEventListener("click", function (e) {
      e.preventDefault(); // voorkom dat hij naar een lege link springt
      alert("Welkom bij de community! Binnenkort kun je je hier aanmelden.");
    });
  }

  // Hover effect voor categoriekaarten (extra visueel accent)
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    });
  });
});