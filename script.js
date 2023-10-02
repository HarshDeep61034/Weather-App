const inputEl = document.getElementById('location');
const btnEl = document.getElementById('fetch-btn');
const statusEl = document.getElementById('status');
const placeEl = document.getElementById('place');
const tempEl = document.getElementById('temp');
const feelEl = document.getElementById('feel-like');
const windEl = document.getElementById('wind');
const humidityEl = document.getElementById('humidity');

btnEl.addEventListener('click', fetchData);
function fetchData(){
    // if(inputEl.value === ""){
    //     inputEl.value = "Muzaffarnagar";
    // }
    fetch(`https://api.weatherapi.com/v1/current.json?key=b299ca9be1f1484db3c33459232704&q=${inputEl.value}`, {mode: 'cors'})

    .then(function(response){
        return response.json();
    })
    .then(function(response){
        const { location: {country, name}, current: {feelslike_c, humidity, wind_kph, temp_c, condition:{text, icon}}} = response
        console.log(response);
        statusEl.innerHTML = text;
        placeEl.innerHTML = `${name}, ${country}`;
        tempEl.innerHTML = `${temp_c}°C`
        feelEl.innerHTML = `FEELS LIKE: ${feelslike_c}`;
        windEl.innerHTML = `WIND: ${wind_kph} KPH`;
        humidityEl.innerHTML = `HUMIDITY: ${humidity}%`;
    })
}
fetchData();