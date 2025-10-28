function rgbGenerator() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = rgb;

  const rgbText = document.createElement("div");
  rgbText.style.position = "absolute";
  rgbText.style.top = "50%";
  rgbText.style.left = "50%";
  rgbText.style.transform = "translate(-50%, -50%)";
  rgbText.style.fontSize = "2em";
  rgbText.style.fontFamily = "Arial, sans-serif";
  rgbText.style.color = "#ffffff";
  rgbText.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  rgbText.style.borderRadius = "10px";
  rgbText.style.padding = "20px 20px";
  rgbText.innerText = rgb;

  document.body.innerHTML = "";
  document.body.appendChild(rgbText);
}

rgbGenerator();
setInterval(rgbGenerator, 3000);
