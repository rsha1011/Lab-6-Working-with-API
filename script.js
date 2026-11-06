const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=wind_speed_10m";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let fish = data.current.wind_speed_10m;

    document.querySelector("#fish-speed").textContent =
      "Fish speed: " + fish + " miles/hr";

    let leaf = document.querySelector("#fish");

    leaf.style.transform = `translateX(${fish * 10}px) rotate(${fish * 10}deg)`;
  });
