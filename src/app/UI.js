export class UI {
    constructor(){
        this.location = document.getElementById('weather-location')
        this.description = document.getElementById('weather-description')
        this.string = document.getElementById('weather-string')
        this.humidity = document.getElementById('weather-humidity')
        this.wind = document.getElementById('weather-wind')
        this.btnChange = document.getElementById('w-change-btn')
        this.city = document.getElementById('city')
        this.countryCode = document.getElementById('countryCode')
    }

    render(weather) {
        this.location.textContent = weather.name + ' / ' + weather.sys.country
        this.description.textContent = weather.weather.map(el => el.description)
        this.string.textContent = weather.main.temp + '°C'
        this.humidity.textContent = 'Humedad: '+ weather.main.humidity + '%'
        this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s'
    }
}