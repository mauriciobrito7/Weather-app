require('./index.css') // importar css.
const {Weather} = require('./weather')
const {UI} = require('./UI')

const ui = new UI()
const weather = new Weather('Puerto Ordaz', 've')

ui.btnChange.addEventListener('click', e =>{
    if(ui.city.value !== '' && ui.countryCode.value !== ''){
        weather.changeLocation(ui.city.value, ui.countryCode.value)
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



