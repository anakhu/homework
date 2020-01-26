export function UI() {
  this.locationForm = document.getElementById('geoposition-form');
  this.body = document.getElementById('body');
  this.prevHourHandle = document.querySelector('.carousel-control-prev');
  this.nextHourHandle = document.querySelector('.carousel-control-next');
  this.hourRangeInput = document.getElementById('range-input');
  this.weatherOutput = document.getElementById('weather-output');
  this.carousel = document.getElementById('carouselExampleControls');
  this.weatherOutputField = document.getElementById('weather-output-field');
  this.message = document.getElementById('message');
  this.spinner = document.getElementById('spinner');

  this.getFormData = () => {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    return {
      latitude,
      longitude,
    };
  };

  this.displayMessage = (content, status) => {
    this.message.textContent = content;
    const messageColor = status ? 'text-success text-center' : 'text-danger text-center';
    this.message.setAttribute('class', messageColor);
  };

  this.displyWeatherOutputField = () => {
    this.weatherOutputField.style.display = 'block';
  };

  this.clearWeatherOutputField = () => {
    this.weatherOutput.textContent = '';
    this.weatherOutputField.style.display = 'none';
  };

  this.renderWeatherTemplate = ({ hourly, timezone }) => {
    hourly.data.forEach((item, index) => {
      const card = document.createElement('div');
      card.setAttribute('id', index);
      if (index === 0) {
        card.setAttribute('class', 'carousel-item-active');
      } else {
        card.setAttribute('class', 'carousel-item');
      }
      card.insertAdjacentHTML('beforeend', `<h3><strong>Weather in ${timezone} tomorrow</strong></h3>`);
      card.insertAdjacentHTML('beforeend', `<h3>${index}:00</h3>`);
      card.insertAdjacentHTML('beforeend', `<h3>${item.summary}</h3>`);
      card.insertAdjacentHTML('beforeend',
        `<p>${item.temperature} &#176;F / ${Math.round((item.temperature - 32) * (5 / 9))} &#176;C </p>`);
      card.insertAdjacentHTML('beforeend', `<p>Humidity: ${item.humidity}</p>`);
      card.insertAdjacentHTML('beforeend', `<p>Windspeed: ${item.windSpeed}</p>`);
      this.weatherOutput.appendChild(card);
    });
  };
}


export function WeatherApp(
  outputRenderer,
  displayHandler,
  messageDisplayHandler,
  spinnerElement,
) {
  this.getWeather = (url) => {
    fetch(url)
      .then((response) => {
        spinnerElement.style.display = 'none';
        if (!response.ok) {
          throw new Error('Fetch error');
        }

        return response.json();
      })
      .then((data) => outputRenderer(data))
      .then(() => displayHandler())
      .then(() => messageDisplayHandler('Successful fetch request!', 1))
      .catch((error) => {
        messageDisplayHandler('Couldn\'t get the weather!', 0);
        console.log(error.message);
      });
  };
}
