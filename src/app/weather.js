export class Weather{
    
    constructor(city, countryCode) {
        this.apiKey = 'a3f8a5c072e8dbe64fb9e9a2814fc328'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() { 

        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`
        const response = await fetch(URI)
        const data = await response.json() // convierte en json y toma tiempo
        return data

    }

    changeLocation(city, countryCode) {
        this.city = city
        this.countryCode = countryCode
    }

}