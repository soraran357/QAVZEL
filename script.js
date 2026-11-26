
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

let currentLanguage = "ja";

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "ja" ? "en" : "ja";

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-ja][data-en]").forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  languageToggle.innerHTML =
    currentLanguage === "ja"
      ? "<span>文A</span> EN"
      : "<span>文A</span> JP";
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");

  menuToggle.textContent =
    nav.classList.contains("open") ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});
