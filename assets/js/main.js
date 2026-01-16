document.addEventListener("DOMContentLoaded", () => {
  /* --- 1. Mobile Navigation Toggle --- */
  const toggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");

      // Accessibility: update aria-expanded
      const isOpen = navLinks.classList.contains("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  /* --- 2. CTA Reinforcement (Primary Conversion Cue) --- */
  const hero = document.querySelector(".hero");
  const navCta = document.querySelector(".nav-cta");

  if (hero && navCta) {
    new IntersectionObserver(
      ([entry]) => {
        navCta.classList.toggle("cta-active", !entry.isIntersecting);
      },
      { threshold: 0.25 }
    ).observe(hero);
  }

  /* --- 3. Form Handling (Simulation) --- */
  const contactForm = document.querySelector("form");
  const submitBtn = contactForm?.querySelector("button");

  if (contactForm && submitBtn) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const originalText = submitBtn.innerText;
      submitBtn.innerText = "Sending...";
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerText = "Message Sent!";
        submitBtn.style.backgroundColor = "#10b981";
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = "";
        }, 3000);
      }, 1500);
    });
  }
});
