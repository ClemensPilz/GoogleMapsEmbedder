document.getElementById("generate").addEventListener("click", () => {
  const place = document.getElementById("place").value;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed`;

  const embedCode = `<iframe width="600" height="450" frameborder="0" style="border:0" src="${embedUrl}" allowfullscreen></iframe>`;
  document.getElementById("embedCode").value = embedCode;
});
