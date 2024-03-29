import { config } from './api';

interface WeatherData {
  weather: { main: string }[];
  main: { temp: number };
  name: string;
}

function onGeoOk(position: GeolocationPosition) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const WEATHER_API = config.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then((data: WeatherData) => {
      const weather = document.querySelector(
        '#weather span:first-child'
      ) as HTMLElement;
      const city = document.querySelector(
        '#weather span:last-child'
      ) as HTMLElement;
      weather.innerText = `${data.weather[0].main} / ${~~data.main.temp} ℃`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert('위치 정보를 불러올 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
