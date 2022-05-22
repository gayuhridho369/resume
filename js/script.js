const downloadOut = document.querySelector("#downloadOut");
const main = document.querySelector("#main");
const download = document.querySelector("#download");

function hideDownload() {
  download.classList.add("hidden");
}

function showDownload() {
  download.classList.remove("hidden");
}

function downloadPDF() {
  hideDownload();
  html2pdf(main, options);
  setTimeout(showDownload, 3000);
}

const options = {
  margin: 0,
  filename: "Gayuh Ridho (Resume).pdf",
  image: { type: "jpeg", quality: 0.95 },
  html2canvas: { scale: 8 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

download.addEventListener("click", downloadPDF);
downloadOut.addEventListener("click", downloadPDF);
