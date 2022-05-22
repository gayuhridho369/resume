const downloadOut = document.querySelector("#downloadOut");
const main = document.querySelector("#main");
const download = document.querySelector("#download");

function hideDownload() {
  download.classList.add("hidden");
}

function showDownload() {
  download.classList.remove("hidden");
}

const options = {
  margin: 0,
  filename: "Gayuh Ridho (Resume).pdf",
  image: { type: "jpeg", quality: 0.95 },
  html2canvas: { scale: 8 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

download.addEventListener("click", function () {
  hideDownload();
  html2pdf(main, options);
  setTimeout(showDownload, 3000);
});

downloadOut.addEventListener("click", function () {
  main.style.display = "grid";
  hideDownload();
  html2pdf(main, options);
  setTimeout(showDownload, 1000);
  setTimeout(function () {
    main.style.display = "none";
  }, 500);
});

window.addEventListener("resize", function () {
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 900) {
    main.style.display = "none";
  } else {
    main.style.display = "grid";
  }
});
