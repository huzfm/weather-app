const apiKey = '23e49361036cac859850b6f3e9f5bfd3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');


function handleInput(e){
    if (e.keyCode === 13){
      
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




function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            locationElement.textContent = "Please enter the valid City name";
            temperatureElement.textContent = "or check"
            descriptionElement.textContent = "spelling"
            // locationElement.style = 'color : red'
            // temperatureElement.style = 'color : red'
            // descriptionElement.style = 'color : red '
            


        });


}

