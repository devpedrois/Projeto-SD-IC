
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  menuBtn.onclick = function () {
    sidebar.classList.toggle("expandido");
  };

  //lalala
  document.getElementById("download-btn").addEventListener("click", function download() {
      const link = document.createElement("a");
      link.href = "https://drive.google.com/file/d/1o6fTtGe7TerOn6wKzoirMDVpbqZCZQLG/view?usp=sharing";
      link.download = "Coldwheels.ino";                      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
  document.getElementsById("montagem-btn").addEventListener("click", function montagempdf() {
      const link = document.createElement("a");
      link.href = "https://drive.google.com/file/d/1OGVx9FjG8Hi16L22csLt_G88dVNNyEkj/view?usp=sharing";
      link.download = "MODELAGEM PRATICA GRUPO-KIT 08.pdf";                      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
 


