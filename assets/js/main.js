document.addEventListener("DOMContentLoaded", () => {
  // --- CONFIGURATION ---
  const API_URL = "https://intelligence-hub-v2.onrender.com";

  // --- 1. Mobile Navigation Toggle ---
  const toggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
      const isOpen = navLinks.classList.contains("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  // --- 2. Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  // --- 3. Lightbox Logic ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const triggers = document.querySelectorAll(".gallery-item img");

  triggers.forEach((img) => {
    img.addEventListener("click", () => {
      const fullSizeSrc = img.getAttribute("data-full") || img.src;
      lightboxImg.src = fullSizeSrc;
      lightbox.classList.add("active");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

  // --- 4. CONTACT FORM
  const contactForm = document.querySelector("form");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button");
      const originalText = submitBtn.innerText;

      // UI Loading State
      submitBtn.innerText = "Sending...";
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      const payload = {
        full_name: formData.get("name"),
        email: formData.get("email"),
        project_type: formData.get("subject"),
        description: formData.get("message"),
      };

      try {
        const response = await fetch(`${API_URL}/leads/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          submitBtn.innerText = "Message Sent!";
          submitBtn.style.backgroundColor = "#10b981"; // Success Green
          contactForm.reset();
        } else {
          throw new Error("Server rejected request");
        }
      } catch (error) {
        console.error("Error:", error);
        submitBtn.innerText = "Error - Try Again";
        submitBtn.style.backgroundColor = "#ef4444"; // Error Red
      }

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "";
      }, 3000);
    });
  }

  // --- 5. AI ANALYSIS FEATURE (Connected to Render) ---
  const aiBtn = document.getElementById("aiBtn");
  const aiInput = document.getElementById("aiInput");
  const aiResponse = document.getElementById("aiResponse");

  if (aiBtn && aiInput && aiResponse) {
    aiBtn.addEventListener("click", async () => {
      const text = aiInput.value.trim();
      if (!text) return alert("Please describe your design idea first.");

      // UI Loading State
      aiBtn.disabled = true;
      aiBtn.innerText = "Analyzing... (Waking up AI)";
      aiResponse.classList.remove("hidden");
      aiResponse.innerHTML =
        "<em>Connecting to Intelligence Hub... (First request takes ~30s)</em>";

      try {
        const res = await fetch(`${API_URL}/analyze`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: text }),
        });

        const data = await res.json();

        if (data.analysis) {
          aiResponse.innerHTML = `<strong>AI Suggestion:</strong><br>${data.analysis}`;
        } else {
          aiResponse.innerText =
            "The AI didn't return a clear answer. Please try again.";
        }
      } catch (err) {
        console.error(err);
        aiResponse.innerText =
          "Error connecting to backend. Please check your internet or try again.";
      } finally {
        aiBtn.disabled = false;
        aiBtn.innerText = "Analyze My Idea";
      }
    });
  }
});
