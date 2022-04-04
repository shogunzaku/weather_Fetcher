let cityname = document.querySelector(".city")
let placetemp = document.querySelector(".temp")
let humidtyinfo = document.querySelector(".humidity")
let windspeedinfo = document.querySelector(".wind")
let searchtext = document.querySelector(".search-bar")
let citysearch = ""
let lat = ""
let lon = ""
document.querySelector("#searchbutton").addEventListener("click", function () {
    citysearch = searchtext.value



    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + citysearch + '&units=imperial&appid=7886c76b2173be56177342035865e34e')
        .then(response => response.json()
            .then(data => {
                console.log(data)
                cityname.textContent = data.name
                placetemp.textContent = "Temp- " + data.main.temp
                humidtyinfo.textContent = "Humidity- " + data.main.humidity
                windspeedinfo.textContent = "Wind Speed- " + data.wind.speed
                lat = data.coord.lat
                lon = data.coord.lon
          
    // fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=7886c76b2173be56177342035865e34e')
    //     .then(response => response.json()
    //         .then(data => {
    //             console.log(data)

    //         }))
            }))
})
