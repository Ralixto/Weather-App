import * as UI from './ui.js';
import { weatherApi } from './api.js';


async function displayWeatherInfo () {
    UI.elements.loader.style.display = 'block';
    UI.elements.weatherDisplay.style.display = 'none'; 
    UI.elements.errorMessage.style.display = 'none';

    const data = await weatherApi(UI.elements.cityInput.value);
    UI.elements.loader.style.display = 'none';

    UI.elements.loader.classList.add('hide-loader');

    if (data) {
        localStorage.setItem('lastCity', UI.elements.cityInput.value);

        const {location: {region}, current} = data;
        const {condition: {text, icon}, temp_c, humidity} = current;
        
        UI.elements.weatherDisplay.style.display = 'block';
        UI.elements.cityName.textContent = region;
        UI.elements.weatherIcon.src = icon;
        UI.elements.temperature.textContent = `${temp_c}°C`;
        UI.elements.description.textContent = text;
        UI.elements.humidity.textContent = humidity;
    } else {
        UI.showScreen(UI.elements.errorMessage);
    }

    if (data.error) {
        UI.elements.errorMessage.style.display = 'block';
        return;
    }
    if (!UI.elements.cityInput.value.trim()) return;
}

UI.elements.searchBtn.addEventListener('click', displayWeatherInfo);



const savedCity = localStorage.getItem('lastCity');

if (savedCity) {
    UI.elements.cityInput.value = savedCity;
    displayWeatherInfo();
}