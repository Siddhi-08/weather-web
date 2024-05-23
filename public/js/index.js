const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector(".middle_layer");
const min_temp = document.getElementById("min_temp").querySelector("span");
const max_temp = document.getElementById("max_temp").querySelector("span");
const humidity = document.getElementById("humidity").querySelector("span");
const pressure = document.getElementById("pressure").querySelector("span");
const wind_speed = document.getElementById("wind_speed").querySelector("span");
const temp_unit = document.getElementById("temp_unit");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = "please write the name before search";
    data_hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=37071304c6e88243bc49c6af5b005698`;
      const resp = await fetch(url);
      const data = await resp.json();
      // const arr=[data];
      city_name.innerText = `${data.name}, ${data.sys.country}`;
      temp.innerText = data.main.temp + "°C";
      min_temp.innerText = data.main.temp_min;
      max_temp.innerText = data.main.temp_max;
      humidity.innerText = data.main.humidity;
      pressure.innerText = data.main.pressure;
      wind_speed.innerText = data.wind.speed;
      const tempMood = data.weather[0].main;

      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
      }
      if (tempMood == "Haze") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-cloud' style='color:#add8e6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fa-thin fa-raindrops' style='color:#a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa-regular fa-cloud' style='color:#f1f2f6;'></i>";
      }
      data_hide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "please enter the valid city name";
      data_hide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
