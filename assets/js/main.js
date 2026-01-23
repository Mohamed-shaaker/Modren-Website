document.addEventListener("DOMContentLoaded", () => {
  /* --- 1. Mobile Navigation Toggle --- */
  const toggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
      const isOpen = navLinks.classList.contains("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  /* --- 2. Scroll Reveal Animations (New) --- */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Run once per element
        }
      });
    },
    { threshold: 0.15 }, // Trigger when 15% of element is visible
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* --- 3. Lightbox Logic (New) --- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const triggers = document.querySelectorAll(".gallery-item img");

  triggers.forEach((img) => {
    img.addEventListener("click", () => {
      // Use the high-res data attribute if available, else current src
      const fullSizeSrc = img.getAttribute("data-full") || img.src;
      lightboxImg.src = fullSizeSrc;
      lightbox.classList.add("active");
    });
  });

  // Close when clicking X
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  // Close when clicking outside the image
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

  /* --- 4. Form Handling (Simulation) --- */
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
