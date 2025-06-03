document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function () {
      sidebar.classList.toggle("expandido");

      const main = document.querySelector("main");
      const footer = document.querySelector("footer");

      if (sidebar.classList.contains("expandido")) {
        main.style.marginLeft = "240px";
        footer.style.width = "calc(100% - 240px)";
        footer.style.left = "240px";
      } else {
        main.style.marginLeft = "80px";
        footer.style.width = "calc(100% - 80px)";
        footer.style.left = "80px";
      }
    });

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (sidebar.classList.contains("expandido")) {
      main.style.marginLeft = "240px";
      footer.style.width = "calc(100% - 240px)";
      footer.style.left = "240px";
    }
  }
});
