import { REQUEST_CONFIG, buildUrl, buildRequestData } from './utils.js';
import { UI, WeatherApp } from './ui.js';

function initApp() {
  const ui = new UI();
  const app = new WeatherApp(
    ui.renderWeatherTemplate,
    ui.displyWeatherOutputField,
    ui.displayMessage,
    ui.spinner,
  );

  ui.locationForm.addEventListener('submit', (e) => {
    ui.clearWeatherOutputField();
    e.preventDefault();

    const inputValues = ui.getFormData();
    const data = buildRequestData(inputValues);

    const url = buildUrl(
      REQUEST_CONFIG,
      data,
    );

    ui.spinner.style.display = 'block';
    app.getWeather(url);
  });

  ui.hourRangeInput.addEventListener('change', (e) => {
    const activeWeatherCard = document.querySelector('div.carousel-item-active');
    activeWeatherCard.setAttribute('class', 'carousel-item');
    const currentWeatherCard = document.getElementById(e.target.value);
    currentWeatherCard.setAttribute('class', 'carousel-item-active');
  });

  ui.prevHourHandle.addEventListener('click', (e) => {
    const activeWeatherCard = document.querySelector('div.carousel-item-active');
    const prevWeatherCard = document.getElementById(`${(+activeWeatherCard.id - 1)}`);
    if (prevWeatherCard) {
      prevWeatherCard.setAttribute('class', 'carousel-item-active');
      activeWeatherCard.setAttribute('class', 'carousel-item');
    }
  });

  ui.nextHourHandle.addEventListener('click', (e) => {
    const activeWeatherCard = document.querySelector('div.carousel-item-active');
    const nextWeatherCard = document.getElementById(`${(+activeWeatherCard.id + 1)}`);
    if (nextWeatherCard) {
      nextWeatherCard.setAttribute('class', 'carousel-item-active');
      activeWeatherCard.setAttribute('class', 'carousel-item');
    }
  });
}

initApp();
