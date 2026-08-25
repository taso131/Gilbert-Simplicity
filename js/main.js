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
