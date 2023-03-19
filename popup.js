document.getElementById("generate").addEventListener("click", () => {
    const place = document.getElementById("place").value;
    const apiKey = 'YOURKEY'; // Replace with your Google Maps API key
    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(place)}`;
  
    const embedCode = `<iframe width="600" height="450" frameborder="0" style="border:0" src="${embedUrl}" allowfullscreen></iframe>`;
    document.getElementById("embedCode").value = embedCode;
  });
  