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

    document
      .getElementById("download-btn")
      .addEventListener("click", function download() {
        const link = document.createElement("a");
        link.href =
          "https://drive.google.com/file/d/1o6fTtGe7TerOn6wKzoirMDVpbqZCZQLG/view?usp=sharing";
        link.download = "Coldwheels.ino";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    document
      .getElementsById("montagem-btn")
      .addEventListener("click", function montagempdf() {
        const link = document.createElement("a");
        link.href =
          "https://drive.google.com/file/d/1OGVx9FjG8Hi16L22csLt_G88dVNNyEkj/view?usp=sharing";
        link.download = "MODELAGEM PRATICA GRUPO-KIT 08.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }
});
