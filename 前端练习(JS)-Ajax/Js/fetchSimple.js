let url = 'http://api.jirengu.com/getWeather.php?city=北京' 
fetch(url).then(response => response.json() )
.then(data => {
document.body.innerText = data.results[0].weather_data[0].weather
})