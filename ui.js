export const elements = {
    cityInput: document.getElementById('city-input'),
    searchBtn: document.getElementById('search-btn'),
    weatherDisplay: document.getElementById('weather-display'),
    cityName: document.getElementById('city-name'),
    weatherIcon: document.getElementById('weather-icon'),
    temperature: document.getElementById('temperature'),
    description: document.getElementById('description'),
    humidity: document.getElementById('humidity'),
    errorMessage: document.getElementById('error-message'),
    loader: document.getElementById('loader'),
}

export function showScreen(screen) {
    elements.weatherDisplay.style.display = 'none';
    screen.style.display = 'block';
}



// Core features

// Search a city by name
// Display temperature, weather condition, humidity, and wind speed
// Loading state while fetching
// Error handling for invalid cities or network failure
// Save the last searched city in localStorage and load it on page open


// Concepts you will be applying

// Destructuring — unpacking the API response