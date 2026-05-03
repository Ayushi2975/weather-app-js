async function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Enter city name!");
        return;
    }
   const API_KEY = "8333612fbb24a61c16a1fa51a934eecf";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        let result = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].main}</p>
        `;

        document.getElementById("weatherResult").innerHTML = result;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data!";
    }
}