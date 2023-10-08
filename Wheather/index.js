var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ="23b830f72d0e3d49867fb8b4b5625ee5"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
      var nameval = data['name']
      var descrip = data['weather']['0']['description']
      var temprature = data['main']['temp']
      var wndspeed = data['wind']['speed']


      city.innerHTML='weather of <span>${nameval}<span>'
      temp.innerHTML = 'temperature: <span>${convertion(temprature)} c</span>'
      description.innerHTML = 'sky conditions: <span>${descrip}<span>'
      wind.innerHTML = 'wind speed: <span>${wndspeed} km/h<span>'

    })


    .catch(err => alert('you entered wrong city name'))
})