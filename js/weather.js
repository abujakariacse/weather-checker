const API_KEY = `c610afe737167ac785d2bfd7fd5fe594`;

const searchTemparature = () => {
  const getCity = document.getElementById("city-name");
  const city = getCity.value;
  getCity.value = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};

const setInnerText = (id, text, country = "") => {
  document.getElementById(id).innerText = text + ", " + country;
};

const displayTemp = (data) => {
  setInnerText("city", data.name, data.sys.country);
  setInnerText("temperature", data.main.temp);
  setInnerText("weather-condition", data.weather[0].main);

  const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById("weather-icon").setAttribute("src", url);
};
