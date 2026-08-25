const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const carousel = document.querySelector(".hero-art");
const carouselTrack = carousel?.querySelector(".hero-carousel-track");
const carouselSlides = [...(carousel?.querySelectorAll(".hero-slide") || [])];
const carouselIndex = document.querySelector(".hero-index");
const previousSlideButton = carousel?.querySelector(".hero-carousel-prev");
const nextSlideButton = carousel?.querySelector(".hero-carousel-next");
const toggleCarouselButton = carousel?.querySelector(".hero-carousel-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (carousel && carouselTrack && carouselSlides.length) {
  let currentSlide = 0;
  let autoplayTimer;
  let isPaused = reducedMotion.matches;

  const showSlide = (index) => {
    currentSlide = (index + carouselSlides.length) % carouselSlides.length;
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    carouselSlides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== currentSlide));
    });

    if (carouselIndex) {
      carouselIndex.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(carouselSlides.length).padStart(2, "0")}`;
    }
  };

  const stopAutoplay = () => window.clearInterval(autoplayTimer);
  const startAutoplay = () => {
    stopAutoplay();
    const isBeingUsed = carousel.matches(":hover") || carousel.contains(document.activeElement);
    if (!isPaused && !document.hidden && !isBeingUsed) {
      autoplayTimer = window.setInterval(() => showSlide(currentSlide + 1), 5000);
    }
  };
  const selectSlide = (index) => {
    showSlide(index);
    startAutoplay();
  };
  const updateToggleButton = () => {
    if (!toggleCarouselButton) return;
    toggleCarouselButton.textContent = isPaused ? "▶" : "Ⅱ";
    toggleCarouselButton.setAttribute("aria-label", isPaused ? "Diashow abspielen" : "Diashow pausieren");
  };

  previousSlideButton?.addEventListener("click", () => selectSlide(currentSlide - 1));
  nextSlideButton?.addEventListener("click", () => selectSlide(currentSlide + 1));
  toggleCarouselButton?.addEventListener("click", () => {
    isPaused = !isPaused;
    updateToggleButton();
    startAutoplay();
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") selectSlide(currentSlide - 1);
    if (event.key === "ArrowRight") selectSlide(currentSlide + 1);
  });
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) startAutoplay();
  });
  document.addEventListener("visibilitychange", startAutoplay);
  reducedMotion.addEventListener("change", (event) => {
    isPaused = event.matches;
    updateToggleButton();
    startAutoplay();
  });

  showSlide(0);
  updateToggleButton();
  startAutoplay();
}

const dialog = document.querySelector(".lightbox");
const dialogImage = dialog?.querySelector("img");
const dialogTitle = dialog?.querySelector("h2");
const dialogMeta = dialog?.querySelector(".lightbox-inner p");
const closeButton = dialog?.querySelector(".lightbox-close");

document.querySelectorAll(".art-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (!dialog || typeof dialog.showModal !== "function") return;
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.querySelector("img")?.alt || "";
    dialogTitle.textContent = button.dataset.title;
    dialogMeta.textContent = button.dataset.meta;
    dialog.showModal();
  });
});

closeButton?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
