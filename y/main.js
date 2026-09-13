document.addEventListener("DOMContentLoaded", () => {
  // MENU MOBILE
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");

      mobileBtn.setAttribute("aria-expanded", isOpen);
      mobileBtn.setAttribute(
        "aria-label",
        isOpen ? "Chiudi menu" : "Apri menu",
      );
    });

    // Chiude il menu quando si clicca su un link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileBtn.setAttribute("aria-expanded", "false");
        mobileBtn.setAttribute("aria-label", "Apri menu");
      });
    });
  }

  // =========================
  // SCROLL REVEAL
  // =========================

  const elementsToReveal = document.querySelectorAll(
    ".img-wrapper, .dispensa-item, .quote, .section h2, .section > .container > p",
  );

  elementsToReveal.forEach((element) => element.classList.add("reveal"));

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("active"));
  }
});
