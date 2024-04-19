const apiKey = '23e49361036cac859850b6f3e9f5bfd3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const humidity = document.getElementById("humidity")
const descriptionElement = document.getElementById('description');
const country = document.getElementById("country")
const lat = document.getElementById("lat");
const long = document.getElementById("long")


const fetchWeather = async (location) => {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url)
        const data = await response.json();
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        humidity.textContent = `Humidity - ${data.main.humidity}`
        descriptionElement.textContent = data.weather[0].description;
        long.textContent = `Longitude - ${data.coord.lon}`
        lat.textContent = `Latitude - ${data.coord.lat}`
        country.textContent = data.sys.country;
        console.log(data)


    }
    catch (error) {
        console.error("Error in fetching data", error);
        locationElement.textContent = "Please enter a valid city name";
        temperatureElement.textContent = "or check spelling";
        descriptionElement.textContent = "";
        country.textContent = ''
        lat.textContent = ''
        long.textContent = ''
        humidity.textContent = ''
        // locationElement.style = 'color: red';
        // temperatureElement.style = 'color: red';
        // descriptionElement.style = 'color: red';
    }
    
}



function handleInput(e) {
    if (e.keyCode === 13) {

        const location = locationInput.value;
        if (location) {
            fetchWeather(location);
        }
    }
}

searchButton.addEventListener('click', (e) => {

    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }

});






