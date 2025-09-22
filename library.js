document.addEventListener("DOMContentLoaded", () => {
  const mainButton = document.querySelector(".button-pro");

  // Theme toggle
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  mainButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // 🔑 Modal setup (moved inside DOMContentLoaded)
  const modal = document.getElementById("demoModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }
});
