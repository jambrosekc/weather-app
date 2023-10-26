function formatDate(timestamp) {
  let now = new Date(timestamp);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[now.getDay()];
  let newHours = calcHours(timestamp);
  return `${day} ${newHours}`;
}

function calcHours(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
      minutes = `0${minutes}`;
  }
  if (hours > 12) {
    hours = hours - 12;
    displayTime = `${hours}:${minutes} PM`;
  } else if(hours = 12) {
    hours = hours;
    displayTime = `${hours}:${minutes} PM`;
  } else if(hours < 12) {
    hours = hours;
    displayTime = `${hours}:${minutes} AM`;
    if (hours < 10) {
        hours = `0${hours}`;
        displayTime = `${hours}:${minutes} AM`;
      }
  }
  return displayTime; 
}

function convertCToF(cel_dayx_M){
  let fahrenheightTempX = (cel_dayx_M * 9) / 5 + 32;
  return Math.round(fahrenheightTempX);
}

function convertKToF(tempK){
  return Math.round((convertKToC(tempK) * 9) / 5 + 32);
}

function convertKToC(tempK){
  return Math.round(tempK-273.15);
}

function displayWeather(response) {
  console.log(response)
  let dateDiv = document.querySelector("#time-display");
  let tempDiv = document.querySelector("#temperature");
  let tempdescDiv = document.querySelector("#temperature-desc");
  let cityDiv = document.querySelector("#cityInput");
  let humidityDiv = document.querySelector("#humidity");
  let windDiv = document.querySelector("#wind");

  let city = response.data.name;

  let kelvinTemperature = response.data.main.temp;
  celsiusTemperature = convertKToC(kelvinTemperature);

  let description = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let windSpeed = response.data.wind.speed;

  dateDiv.innerHTML = formatDate(response.data.dt * 1000);
  tempDiv.innerHTML = Math.round(celsiusTemperature);
  tempdescDiv.innerHTML = `${description}`;
  cityDiv.innerHTML = `${city}`;
  humidityDiv.innerHTML = ` ${humidity}%`;
  windDiv.innerHTML = ` ${windSpeed}km/h`;

  let icon0 = document.querySelector("#day0_img");
  let icon0num = response.data.weather[0].icon;
  icon0.setAttribute("src", `https://openweathermap.org/img/wn/${icon0num}@2x.png`);
  getForecast(response.data.name);
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
  let icon1 = document.querySelector("#day1_img");
  let icon2 = document.querySelector("#day2_img");
  let icon3 = document.querySelector("#day3_img");
  let icon4 = document.querySelector("#day4_img");
  let icon5 = document.querySelector("#day5_img");

  var day1_ = getDayOfW(response)[0];
  var day2_ = getDayOfW(response)[1];
  var day3_ = getDayOfW(response)[2];
  var day4_ = getDayOfW(response)[3];
  var day5_ = getDayOfW(response)[4];
  day1.innerHTML = `${day1_}`;
  day2.innerHTML = `${day2_}`;
  day3.innerHTML = `${day3_}`;
  day4.innerHTML = `${day4_}`;
  day5.innerHTML = `${day5_}`;

  array_cel_dayx_Max = [];
  function update_dayx_Max(numberOfDays){
    
    for (let i=1; i<numberOfDays+1; i++) {
      let dayObject = {
        "day":i, 
        "cel_dayx_Max":convertKToC(getMax2(response, getDay(response)[i-1].today_plus))
      };
      array_cel_dayx_Max.push(dayObject);
    }
  }
  update_dayx_Max(5);
  array_cel_dayx_Min = [];
  function update_dayx_Min(numberOfDays){
    for (let i=1; i<numberOfDays+1; i++) {
      let dayObject = {
        "day":i, 
        "cel_dayx_Min":convertKToC(getMin2(response, getDay(response)[i-1].today_plus))
      };
      array_cel_dayx_Min.push(dayObject);
    }
  }
  update_dayx_Min(5);
  cel_day1_Max = array_cel_dayx_Max[0].cel_dayx_Max;
  cel_day2_Max = array_cel_dayx_Max[1].cel_dayx_Max;
  cel_day3_Max = array_cel_dayx_Max[2].cel_dayx_Max;
  cel_day4_Max = array_cel_dayx_Max[3].cel_dayx_Max;
  cel_day5_Max = array_cel_dayx_Max[4].cel_dayx_Max;
  day1Max.innerHTML = cel_day1_Max;
  day2Max.innerHTML = cel_day2_Max;
  day3Max.innerHTML = cel_day3_Max;
  day4Max.innerHTML = cel_day4_Max;
  day5Max.innerHTML = cel_day5_Max;

  cel_day1_Min = array_cel_dayx_Min[0].cel_dayx_Min;
  cel_day2_Min = array_cel_dayx_Min[1].cel_dayx_Min;
  cel_day3_Min = array_cel_dayx_Min[2].cel_dayx_Min;
  cel_day4_Min = array_cel_dayx_Min[3].cel_dayx_Min;
  cel_day5_Min = array_cel_dayx_Min[4].cel_dayx_Min;
  day1Min.innerHTML = cel_day1_Min;
  day2Min.innerHTML = cel_day2_Min;
  day3Min.innerHTML = cel_day3_Min;
  day4Min.innerHTML = cel_day4_Min;
  day5Min.innerHTML = cel_day5_Min;

  let icon1num = getIcon(response, getDay(response)[0].today_plus);
  icon1.setAttribute("src", `https://openweathermap.org/img/wn/${icon1num}@2x.png`);
  let icon2num = getIcon(response, getDay(response)[1].today_plus);
  icon2.setAttribute("src",`https://openweathermap.org/img/wn/${icon2num}@2x.png`);
  let icon3num = getIcon(response, getDay(response)[2].today_plus);
  icon3.setAttribute("src",`https://openweathermap.org/img/wn/${icon3num}@2x.png`);
  let icon4num =getIcon(response, getDay(response)[3].today_plus);
  icon4.setAttribute("src",`https://openweathermap.org/img/wn/${icon4num}@2x.png`) ;
  let icon5num = getIcon(response, getDay(response)[4].today_plus);
  icon5.setAttribute("src",`https://openweathermap.org/img/wn/${icon5num}@2x.png`);
}

function updatePage(apiUrl){
  axios.get(apiUrl).then(
    (response) => {
    displayWeather(response);
  })
}

function getDay(response){
  let day = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
  let days = [];
  for (let i = 0; i<5; i++){
    let day = "today_plus";
    let dt = response.data.list[(i*8)].dt;
    let dt_conv = new Date(dt*1000);
    let day_val =  (dt_conv).getDay();
    let dayObject = {[day]:day_val}
    days.push(dayObject);
  }
  return days;
}

function getDayOfW(response){
  let days = [];
  for (let i = 0; i<5; i++){
    let day = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    let object = getDay(response);
    daynum = object[i].today_plus;
    let dayx = day[daynum];
    days.push(dayx);
  }
  return days;
}

function getMax2(response, day){
  let min = Math.max(...response.data.list.filter(i=>((new Date(i.dt*1000)).getDay() === day)).map(i=>(i.main.temp_max)))
  return Math.round(min);
}

function getMin2(response, day){
  let min = Math.min(...response.data.list.filter(i=>((new Date(i.dt*1000)).getDay() === day)).map(i=>(i.main.temp_min)))
  return Math.round(min);
}

function getIcon(response, day){
  let myObject = response.data.list.filter(i=>((new Date(i.dt*1000)).getDay() === day)).reduce((prev, curr) => prev.main.temp_min < curr.main.temp_min ? prev : curr);
  return myObject.weather[0].icon;
}

function search(apiCity){
  let apiKey = "154aea7825e304bd5cc777c00a53518d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}`;
  updatePage(apiUrl);
}

function getForecast(apiCity){
  let apiKey = "154aea7825e304bd5cc777c00a53518d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${apiCity}&appid=${apiKey}`;
  axios.get(apiUrl).then(
    (response) => {
    display5DayWeatherForecast(response);
    getDay(response);
  })
}

function clickSearch(event){
  event?.preventDefault()
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = convertCToF(celsiusTemperature);

  let myArray = [];
  for (let i=1; i<6; i++) {
    let cel_dayx_Max = "cel_day"+i+"_Max";
    let myObject = {
      [cel_dayx_Max]: array_cel_dayx_Max[i-1].cel_dayx_Max,
      "day":i, 
      "tempHiDisplay": document.querySelector(`#day${i}_maxtemp`),
      "tempLoDisplay": document.querySelector(`#day${i}_mintemp`),
    };
    myArray.push(myObject);
  }
  myArray[0].tempHiDisplay.innerHTML = convertCToF(array_cel_dayx_Max[0].cel_dayx_Max);
  myArray[1].tempHiDisplay.innerHTML = convertCToF(array_cel_dayx_Max[1].cel_dayx_Max);
  myArray[2].tempHiDisplay.innerHTML = convertCToF(array_cel_dayx_Max[2].cel_dayx_Max);
  myArray[3].tempHiDisplay.innerHTML = convertCToF(array_cel_dayx_Max[3].cel_dayx_Max);
  myArray[3].tempHiDisplay.innerHTML = convertCToF(array_cel_dayx_Max[4].cel_dayx_Max);
  myArray[0].tempLoDisplay.innerHTML = convertCToF(array_cel_dayx_Min[0].cel_dayx_Min);
  myArray[1].tempLoDisplay.innerHTML = convertCToF(array_cel_dayx_Min[1].cel_dayx_Min);
  myArray[2].tempLoDisplay.innerHTML = convertCToF(array_cel_dayx_Min[2].cel_dayx_Min);
  myArray[3].tempLoDisplay.innerHTML = convertCToF(array_cel_dayx_Min[3].cel_dayx_Min);
  myArray[3].tempLoDisplay.innerHTML = convertCToF(array_cel_dayx_Min[4].cel_dayx_Min);
} 

function displayCelsiusTemperature(event) {
  event.preventDefault();
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);

  let myArray = [];
  for (let i=1; i<6; i++) {
    let cel_dayx_Max = "cel_day"+i+"_Max";
    let myObject = {
      [cel_dayx_Max]: array_cel_dayx_Max[i-1].cel_dayx_Max,
      "day":i, 
      "tempHiDisplay": document.querySelector(`#day${i}_maxtemp`),
      "tempLoDisplay": document.querySelector(`#day${i}_mintemp`),
    };
    myArray.push(myObject);
  }
  myArray[0].tempHiDisplay.innerHTML = Math.round(array_cel_dayx_Max[0].cel_dayx_Max);
  myArray[1].tempHiDisplay.innerHTML = Math.round(array_cel_dayx_Max[1].cel_dayx_Max);
  myArray[2].tempHiDisplay.innerHTML = Math.round(array_cel_dayx_Max[2].cel_dayx_Max);  
  myArray[3].tempHiDisplay.innerHTML = Math.round(array_cel_dayx_Max[3].cel_dayx_Max);
  myArray[4].tempHiDisplay.innerHTML = Math.round(array_cel_dayx_Max[4].cel_dayx_Max);
  myArray[0].tempLoDisplay.innerHTML = Math.round(cel_day1_Min);
  myArray[1].tempLoDisplay.innerHTML = Math.round(cel_day2_Min);
  myArray[2].tempLoDisplay.innerHTML = Math.round(cel_day3_Min);
  myArray[3].tempLoDisplay.innerHTML = Math.round(cel_day4_Min);
  myArray[4].tempLoDisplay.innerHTML = Math.round(cel_day5_Min);

  //keeping all of this hear to demosntrate two things:
  //can use cel_day1_Min OR array_cel_dayx_Max[0].cel_dayx_Max
  // can replace tempLoDisplayDay2 with myArray[2].tempLoDisplay.innerHTML
}


let celsiusTemperature = null;

let array_cel_dayx_Max = [];
function add_dayx_Max(numberOfDays){
  for (let i=1; i<numberOfDays+1; i++) {
    let dayObject = {
      "day":i, 
      "cel_dayx_Max":null
    };
    array_cel_dayx_Max.push(dayObject);
  }
}
add_dayx_Max(5);


let cel_day1_Max = array_cel_dayx_Max[0].cel_dayx_Max;
let cel_day2_Max = array_cel_dayx_Max[1].cel_dayx_Max;
let cel_day3_Max = array_cel_dayx_Max[2].cel_dayx_Max;
let cel_day4_Max = array_cel_dayx_Max[3].cel_dayx_Max;
let cel_day5_Max = array_cel_dayx_Max[4].cel_dayx_Max;

let array_cel_dayx_Min = [];
function add_dayx_Min(numberOfDays){
  for (let i=1; i<numberOfDays+1; i++) {
    let dayObject = {
      "day":i, 
      "cel_dayx_Min":null
    };
    array_cel_dayx_Min.push(dayObject);
  }
  return array_cel_dayx_Min;
}
add_dayx_Min(5);

let cel_day1_Min = array_cel_dayx_Min[0].cel_dayx_Min;
let cel_day2_Min = array_cel_dayx_Min[1].cel_dayx_Min;
let cel_day3_Min = array_cel_dayx_Min[2].cel_dayx_Min;
let cel_day4_Min = array_cel_dayx_Min[3].cel_dayx_Min;
let cel_day5_Min = array_cel_dayx_Min[4].cel_dayx_Min;

let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", clickSearch);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature)

let fahrenheitLink= document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature)

search("New York");
