const images = ["city1.jpg", "city2.jpg", "city3.jpg"];

 const chosenImage = images[Math.floor(Math.random() * images.length)];

 const bgImage = document.createElement("img");

 bgImage.src = `img/${chosenImage}`;

 document.body.appendChild(bgImage);