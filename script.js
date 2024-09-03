document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch weather data
    function fetchWeatherData(city) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl)
            .then(response => {
                // Extract relevant data from the response
                const { data } = response;
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const location = data.name;

                // Update HTML content with weather information
                const weatherInfo = `Location: ${location}<br>Temperature: ${temperature}°C<br>Description: ${description}`;
                document.querySelector('.container').innerHTML = weatherInfo;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    // Example usage
    fetchWeatherData('London');
});
