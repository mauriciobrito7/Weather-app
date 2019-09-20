require('./index.css') // importar css.
const {Weather} = require('./weather')
const {UI} = require('./UI')
const {Store} = require('./store')

const ui = new UI()
const store = new Store()
const { city,countryCode } = store.getLocationData()
const weather = new Weather(city, countryCode)

ui.btnChange.addEventListener('click', e =>{
    const city = ui.city.value 
    const countryCode = ui.countryCode.value

    if(city !== '' && countryCode !== ''){
        weather.changeLocation(city, countryCode)
        store.setLocationData(city,countryCode)
        fetchWeather()
    }
    e.preventDefault()
})


async function fetchWeather() { 
    const data = await weather.getWeather()
    console.log(data)
    ui.render(data)
}

document.addEventListener('DOMContentLoaded', fetchWeather)



