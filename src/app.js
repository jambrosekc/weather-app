function formatDate(timestamp) {
  let now = new Date(timestamp);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let newHours = calcHours(hours, minutes);
  return `${day} ${newHours}`;
}
function calcHours(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours > 12) {
    hours = hours - 12;
    displayTime = `${hours}:${minutes} PM`;
  } else if(hours = 12) {
    hours = hours;
    displayTime = `${hours}:${minutes} PM`;
  } else {
    hours = hours;
    displayTime = `${hours}:${minutes} AM`;
  }
  return displayTime; 
}


function displayWeather(response) {
  let dateDiv = document.querySelector("#time-display");
  let tempDiv = document.querySelector("#temperature");
  let tempdescDiv = document.querySelector("#temperature-desc");
  let cityDiv = document.querySelector("#cityInput");
  let humidityDiv = document.querySelector("#humidity");
  let windDiv = document.querySelector("#wind");

  
  let kelvinTemperature = response.data.list[0].main.temp;
  celsiusTemperature = kelvinTemperature-273.15;

  let city = response.data.city.name;
  let description = response.data.list[0].weather[0].description;
  let humidity = response.data.list[0].main.humidity;
  let windSpeed = response.data.list[0].wind.speed;

  dateDiv.innerHTML = formatDate(response.data.list[0].dt * 1000);
  tempDiv.innerHTML = Math.round(celsiusTemperature);
  tempdescDiv.innerHTML = `${description}`;
  cityDiv.innerHTML = `${city}`;
  humidityDiv.innerHTML = ` ${humidity}%`;
  windDiv.innerHTML = ` ${windSpeed}km/h`;
}


function display5DayWeatherForecast(response) {

  let day1Max = document.querySelector("#day1_maxtemp");
  let day1Min = document.querySelector("#day1_mintemp");
  let day1 = document.querySelector("#day1");
  let day2Max = document.querySelector("#day2_maxtemp");
  let day2Min = document.querySelector("#day2_mintemp");
  let day2 = document.querySelector("#day2");
  let day3Max = document.querySelector("#day3_maxtemp");
  let day3Min = document.querySelector("#day3_mintemp");
  let day3 = document.querySelector("#day3");
  let day4Max = document.querySelector("#day4_maxtemp");
  let day4Min = document.querySelector("#day4_mintemp");
  let day4 = document.querySelector("#day4");
  let day5Max = document.querySelector("#day5_maxtemp");
  let day5Min = document.querySelector("#day5_mintemp");
  let day5 = document.querySelector("#day5_disp");

  let icon0 = document.querySelector("#day0_img");
  let icon1 = document.querySelector("#day1_img");
  let icon2 = document.querySelector("#day2_img");
  let icon3 = document.querySelector("#day3_img");
  let icon4 = document.querySelector("#day4_img");
  let icon5 = document.querySelector("#day5_img");
  
  var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];

  let day_1 = response.data.list[3].dt;
  let day_2 = response.data.list[11].dt;
  let day_3 = response.data.list[19].dt;
  let day_4 = response.data.list[27].dt;
  let day_5 = response.data.list[35].dt;

  let today = new Date(day_1*1000)
  let today_plus1 = new Date(day_2*1000)
  let today_plus2 = new Date(day_3*1000)
  let today_plus3 = new Date(day_4*1000)
  let today_plus4 = new Date(day_5*1000)

  var day1_ = days[today.getDay()]
  var day2_ = days[today_plus1.getDay()]
  var day3_ = days[today_plus2.getDay()]
  var day4_ = days[today_plus3.getDay()]
  var day5_ = days[today_plus4.getDay()]

  // 5dayForecast.push({max: response.data.list[num].main.temp_max-273.15, min: samething, day:whateverDay})
  cel_day1_Max = Math.round(response.data.list[6].main.temp_max-273.15);
  cel_day1_Min = Math.round(response.data.list[3].main.temp_min-273.15);
  cel_day2_Max = Math.round(response.data.list[14].main.temp_max-273.15);
  cel_day2_Min = Math.round(response.data.list[11].main.temp_min-273.15);
  cel_day3_Max = Math.round(response.data.list[22].main.temp_max-273.15);
  cel_day3_Min = Math.round(response.data.list[19].main.temp_min-273.15);
  cel_day4_Max = Math.round(response.data.list[30].main.temp_max-273.15);
  cel_day4_Min = Math.round(response.data.list[27].main.temp_min-273.15);
  cel_day5_Max = Math.round(response.data.list[38].main.temp_max-273.15);
  cel_day5_Min = Math.round(response.data.list[35].main.temp_min-273.15);

  day1Max.innerHTML = cel_day1_Max;
  day1Min.innerHTML = cel_day1_Min;
  day2Max.innerHTML = cel_day2_Max;
  day2Min.innerHTML = cel_day2_Min; 
  day3Max.innerHTML = cel_day3_Max;
  day3Min.innerHTML = cel_day3_Min;
  day4Max.innerHTML = cel_day4_Max;
  day4Min.innerHTML = cel_day4_Min;
  day5Max.innerHTML = cel_day5_Max;
  day5Min.innerHTML = cel_day5_Min;
  day1.innerHTML = `${day1_}`;
  day2.innerHTML = `${day2_}`;
  day3.innerHTML = `${day3_}`;
  day4.innerHTML = `${day4_}`;
  day5.innerHTML = `${day5_}`;

  let icon0num = response.data.list[0].weather[0].icon;
  icon0.setAttribute("src", `https://openweathermap.org/img/wn/${icon0num}@2x.png`);
  let icon1num = response.data.list[3].weather[0].icon;
  icon1.setAttribute("src", `https://openweathermap.org/img/wn/${icon1num}@2x.png`);
  let icon2num = response.data.list[11].weather[0].icon;
  icon2.setAttribute("src",`https://openweathermap.org/img/wn/${icon2num}@2x.png`);
  let icon3num = response.data.list[19].weather[0].icon;
  icon3.setAttribute("src",`https://openweathermap.org/img/wn/${icon3num}@2x.png`);
  let icon4num = response.data.list[27].weather[0].icon;
  icon4.setAttribute("src",`https://openweathermap.org/img/wn/${icon4num}@2x.png`) ;
  let icon5num = response.data.list[35].weather[0].icon;
  icon5.setAttribute("src",`https://openweathermap.org/img/wn/${icon5num}@2x.png`);
}

function updatePage(apiUrl){
  axios.get(apiUrl).then((response) => {
    console.log(response)
    displayWeather(response);
    display5DayWeatherForecast(response)
  })/* .catch(err => {
    console.log("error")
    let searchCity2 = document.querySelector("#city-input");
    error404(err, searchCity2)
  });
*/
}
/*     function error404(err, searchCity2) {
  alert(`${searchCity2.value}: ${err.response.data.message}`)
  console.log("how is this function getting searchCity2?");
} */

function search(apiCity){
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${apiCity}&appid=${apiKey}`;
  updatePage(apiUrl);
}

function clickSearch(event){
  event?.preventDefault()
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value)
}


function displayFahrenheitTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

  const tempDay = [];
/* 
Change to:
  max

    for

    "day"= num + "_" + manmin + "temp"

  min */

  let temperatureElement = document.querySelector("#temperature");
  let tempHiDisplayDay1 = document.querySelector("#day1_maxtemp");
  let tempLoDisplayDay1 = document.querySelector("#day1_mintemp");
  let tempHiDisplayDay2 = document.querySelector("#day2_maxtemp");
  let tempLoDisplayDay2 = document.querySelector("#day2_mintemp");
  let tempHiDisplayDay3 = document.querySelector("#day3_maxtemp");
  let tempLoDisplayDay3 = document.querySelector("#day3_mintemp");
  let tempHiDisplayDay4 = document.querySelector("#day4_maxtemp");
  let tempLoDisplayDay4 = document.querySelector("#day4_mintemp");
  let tempHiDisplayDay5 = document.querySelector("#day5_maxtemp");
  let tempLoDisplayDay5 = document.querySelector("#day5_mintemp");  

  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;

  let fahrenheitTemperature0 = (cel_day1_Max * 9) / 5 + 32;
  let fahrenheitTemperature1 = (cel_day1_Min * 9) / 5 + 32;
  let fahrenheitTemperature2 = (cel_day2_Max * 9) / 5 + 32;
  let fahrenheitTemperature3 = (cel_day2_Min * 9) / 5 + 32;
  let fahrenheitTemperature4 = (cel_day3_Max * 9) / 5 + 32;
  let fahrenheitTemperature5 = (cel_day3_Min * 9) / 5 + 32;
  let fahrenheitTemperature6 = (cel_day4_Max * 9) / 5 + 32;
  let fahrenheitTemperature7 = (cel_day4_Min * 9) / 5 + 32;
  let fahrenheitTemperature8 = (cel_day5_Max * 9) / 5 + 32;
  let fahrenheitTemperature9 = (cel_day5_Min * 9) / 5 + 32;

  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  tempHiDisplayDay1.innerHTML = Math.round(fahrenheitTemperature0);
  tempLoDisplayDay1.innerHTML = Math.round(fahrenheitTemperature1);
  tempHiDisplayDay2.innerHTML = Math.round(fahrenheitTemperature2);
  tempLoDisplayDay2.innerHTML = Math.round(fahrenheitTemperature3); 
  tempHiDisplayDay3.innerHTML = Math.round(fahrenheitTemperature4);
  tempLoDisplayDay3.innerHTML = Math.round(fahrenheitTemperature5);
  tempHiDisplayDay4.innerHTML = Math.round(fahrenheitTemperature6);
  tempLoDisplayDay4.innerHTML = Math.round(fahrenheitTemperature7);
  tempHiDisplayDay5.innerHTML = Math.round(fahrenheitTemperature8);
  tempLoDisplayDay5.innerHTML = Math.round(fahrenheitTemperature9);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");

  let temperatureElement = document.querySelector("#temperature");
  let tempHiDisplayDay1 = document.querySelector("#day1_maxtemp");
  let tempLoDisplayDay1 = document.querySelector("#day1_mintemp");
  let tempHiDisplayDay2 = document.querySelector("#day2_maxtemp");
  let tempLoDisplayDay2 = document.querySelector("#day2_mintemp");
  let tempHiDisplayDay3 = document.querySelector("#day3_maxtemp");
  let tempLoDisplayDay3 = document.querySelector("#day3_mintemp");
  let tempHiDisplayDay4 = document.querySelector("#day4_maxtemp");
  let tempLoDisplayDay4 = document.querySelector("#day4_mintemp");
  let tempHiDisplayDay5 = document.querySelector("#day5_maxtemp");
  let tempLoDisplayDay5 = document.querySelector("#day5_mintemp");  

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  tempHiDisplayDay1.innerHTML = Math.round(cel_day1_Max);
  tempLoDisplayDay1.innerHTML = Math.round(cel_day1_Min);
  tempHiDisplayDay2.innerHTML = Math.round(cel_day2_Max);
  tempLoDisplayDay2.innerHTML = Math.round(cel_day2_Min);
  tempHiDisplayDay3.innerHTML = Math.round(cel_day3_Max);
  tempLoDisplayDay3.innerHTML = Math.round(cel_day3_Min);
  tempHiDisplayDay4.innerHTML = Math.round(cel_day4_Max);
  tempLoDisplayDay4.innerHTML = Math.round(cel_day4_Min);
  tempHiDisplayDay5.innerHTML = Math.round(cel_day5_Max);
  tempLoDisplayDay5.innerHTML = Math.round(cel_day5_Min);
}



/* const cell0 = [{max:0, min:100, day:1}, {min:10, max:20, day:2}]
cell0.forEach(c=> {
  let max = document.querySelector("#day"+c.day+"_maxtemp");
  let min = document.querySelector("#day"+c.day+"_mintemp")
  max.innerHTML = Math.round(c.max)
  min.innerHTML = Math.round(c.min)
  console.log(max.innerHTML);
  console.log(min.innerHTML);
})
 */


const initial_cell = [{day:1, max:null, min:null}, {day:2, max:null, min:null},{day:3, max:null, min:null}, {day:4, max:null, min:null},{day:5, max:null, min:null}];

function LoopThroughCelcTempMax(initial_cell){
  let cell = initial_cell
  let cel_dayx_Max = "cel_day"+c.day+"_Max";
  cell.forEach((c, value) => {
    //initial_cell.push(cel_dayx_Max)
    c.cel_dayx_Max = null;
    console.log(c.day+': '+cel_dayx_Max+': '+c.cel_dayx_Max);
    console.log(value);
  })
}

function LoopThroughCelcTempMin(initial_cell){
    let cell = initial_cell
    cell.forEach((c, value)=> {
      let cel_dayx_Min = "cel_day"+c.day+"_Min";
      initial_cell.push(cel_dayx_Min)
      c.cel_dayx_Min = null;
      console.log(c.day+': '+cel_dayx_Min+': '+c.cel_dayx_Min);
      console.log(value);
    })
}



//LoopThroughCelcTempMax(initial_cell);
LoopThroughCelcTempMin(initial_cell);
console.log(initial_cell);

let celsiusTemperature = null;
/* let cel_day1_Max = null;
let cel_day1_Min = null;
let cel_day2_Max = null;
let cel_day2_Min = null;
let cel_day3_Max = null;
let cel_day3_Min = null;
let cel_day4_Max = null;
let cel_day4_Min = null;
let cel_day5_Max = null;
let cel_day5_Min = null; */

let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", clickSearch);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature)

let fahrenheitLink= document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature)

search("New York"); 

/* const data = {
  city:
  {
    name: "New York",
  },

  list:[
    {
      dt:"16777", 
      dt_txt: "blah blah blah",
      main:{
        temp: 289.15,
        feels_like:289.15,
        temp_min:289.15,
        temp_max:289.15,
        humidity:289.15
        },
      weather:[
        {
          description:"overcast clouds",
          icon: 804
        }
      ]
    }
  ],
} */

