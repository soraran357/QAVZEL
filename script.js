const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      String(opened)
    );

    toggle.setAttribute(
      "aria-label",
      opened ? "メニューを閉じる" : "メニューを開く"
    );

    toggle.textContent = opened ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "メニューを開く"
      );

      toggle.textContent = "☰";
    });
  });
}