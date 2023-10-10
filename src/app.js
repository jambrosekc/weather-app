let h2 = document.querySelector("#time-display");

let now = new Date();



function formalDate(h2, now) {

  let date = now.getDate();

  let year = now.getFullYear();

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[now.getDay()];

  let hours = now.getHours();

  let minutes = now.getMinutes();

  let months = [

    "Jan",

    "Feb",

    "March",

    "Apr",

    "May",

    "Jun",

    "Jul",

    "Aug",

    "Sep",

    "Oct",

    "Nov",

    "Dec"

  ];

  let month = months[now.getMonth()];

  let newHours = calcHours2(hours, minutes);

  h2.innerHTML = `${day} ${newHours}`;

}

function calcHours2(hours, minutes) {

  hours = now.getHours();

  if (hours > 12) {

    hours = hours - 12;

    displayTime = `${hours}:${minutes} PM`;

  } else {

    hours = hours;

    displayTime = `${hours}:${minutes} AM`;

  }

  return displayTime;

}



formalDate(h2, now);





function convertToC(event) {

  event.preventDefault();

  console.log(event.target.id);

  let tempDisplay = document.querySelector("#temperature");

  console.log(tempDisplay);

  let clickC = document.querySelector("#celcius");

  let clickF = document.querySelector("#fehren");

  if (event.target.id === "celcius" && currentTempFormat !== "C") {

    let temp = tempDisplay.innerHTML;

    tempDisplay.innerHTML = Math.round((temp - 32) * (5 / 9));

    currentTempFormat = "C"

  } else if(event.target.id === "fehren" && currentTempFormat !== "F") {

    let temp = tempDisplay.innerHTML;

    tempDisplay.innerHTML = Math.round((temp * 9) / 5 + 32);

    console.log(temp);

    currentTempFormat = "F"

  }

}



let currentTempFormat = "C";

let link = document.querySelector("#celcius");

link.addEventListener("click", convertToC)

let link2 = document.querySelector("#fehren");

link2.addEventListener("click", convertToC)



function clickSearch(event){

  event?.preventDefault()

  let searchCity2 = document.querySelector("#city-input");

  //console.log(searchCity2.value);

  let apiCity = searchCity2.value;

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${apiCity}&appid=${apiKey}`;

  updatePage(apiUrl)

}



let searchCity = document.querySelector("#search");

searchCity.addEventListener("click", clickSearch);



function displayWeather2(response, tempDiv, tempdescDiv, cityDiv, humidityDiv, windDiv) {

  let city = response.data.city.name;

  let temperature = Math.round(response.data.list[0].main.temp-273.15);

  let description = response.data.list[0].weather[0].description;

  let humidity = response.data.list[0].main.humidity;

  let windSpeed = response.data.list[0].wind.speed;

  tempDiv.innerHTML = `${temperature}`;

  tempdescDiv.innerHTML = `${description}`;

  cityDiv.innerHTML = `${city}`;

  humidityDiv.innerHTML = ` ${humidity}%`;

  windDiv.innerHTML = ` ${windSpeed}km/h`;

}



function display5DayWeatherForecast(response, day1Max, day1Min, day2Max, day2Min, day3Max, day3Min, day4Max, day4Min, day5Max, day5Min, day1, day2, day3, day4, day5, icon0, icon1, icon2, icon3, icon4, icon5) {

 

  var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];



  let day_1 = response.data.list[0].dt;

  let day_2 = response.data.list[8].dt;

  let day_3 = response.data.list[16].dt;

  let day_4 = response.data.list[24].dt;

  let day_5 = response.data.list[32].dt;



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



  let day1_Max = Math.round(response.data.list[0].main.temp_max-273.15);

  let day1_Min = Math.round(response.data.list[0].main.temp_min-273.15);

  let day2_Max = Math.round(response.data.list[8].main.temp_max-273.15);

  let day2_Min = Math.round(response.data.list[8].main.temp_min-273.15);

  let day3_Max = Math.round(response.data.list[16].main.temp_max-273.15);

  let day3_Min = Math.round(response.data.list[16].main.temp_min-273.15);

  let day4_Max = Math.round(response.data.list[24].main.temp_max-273.15);

  let day4_Min = Math.round(response.data.list[24].main.temp_min-273.15);

  let day5_Max = Math.round(response.data.list[32].main.temp_max-273.15);

  let day5_Min = Math.round(response.data.list[32].main.temp_min-273.15);

  day1Max.innerHTML = `${day1_Max}°`;

  day1Min.innerHTML = `${day1_Min}°`;

  day2Max.innerHTML = `${day2_Max}°`;

  day2Min.innerHTML = `${day2_Min}°`;

  day3Max.innerHTML = `${day3_Max}°`;

  day3Min.innerHTML = `${day3_Min}°`;

  day4Max.innerHTML = `${day4_Max}°`;

  day4Min.innerHTML = `${day4_Min}°`;

  day5Max.innerHTML = `${day5_Max}°`;

  day5Min.innerHTML = `${day5_Min}°`;

  day1.innerHTML = `${day1_}`;

  day2.innerHTML = `${day2_}`;

  day3.innerHTML = `${day3_}`;

  day4.innerHTML = `${day4_}`;

  day5.innerHTML = `${day5_}`;



  let icon0num = response.data.list[0].weather[0].icon;

  icon0.setAttribute("src", `https://openweathermap.org/img/wn/${icon0num}@2x.png`);



  let icon1num = response.data.list[0].weather[0].icon;

  icon1.setAttribute("src", `https://openweathermap.org/img/wn/${icon1num}@2x.png`);



  let icon2num = response.data.list[8].weather[0].icon;

  icon2.setAttribute("src",`https://openweathermap.org/img/wn/${icon2num}@2x.png`);



  let icon3num = response.data.list[16].weather[0].icon;

  icon3.setAttribute("src",`https://openweathermap.org/img/wn/${icon3num}@2x.png`);



  let icon4num = response.data.list[24].weather[0].icon;

  icon4.setAttribute("src",`https://openweathermap.org/img/wn/${icon4num}@2x.png`) ;



  let icon5num = response.data.list[32].weather[0].icon;

  icon5.setAttribute("src",`https://openweathermap.org/img/wn/${icon5num}@2x.png`);



  console.log(icon0num);

  console.log(icon1num);

  console.log(icon2num);



}



function updatePage(apiUrl){

  axios.get(apiUrl).then((response) => {

    console.log(response)

    let tempDiv = document.querySelector("#temperature");

    let tempdescDiv = document.querySelector("#temperature-desc");

    let cityDiv = document.querySelector("#cityInput");

    let humidityDiv = document.querySelector("#humidity");

    let windDiv = document.querySelector("#wind");

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



    displayWeather2(response, tempDiv, tempdescDiv, cityDiv, humidityDiv, windDiv)

    display5DayWeatherForecast(response, day1Max, day1Min, day2Max, day2Min, day3Max, day3Min, day4Max, day4Min, day5Max, day5Min, day1, day2, day3, day4, day5, icon0, icon1, icon2, icon3, icon4, icon5)

  }).catch(err => {

    console.log("error")

    let searchCity2 = document.querySelector("#city-input");

    error404(err, searchCity2)

  });



}

function error404(err, searchCity2) {

  alert(`${searchCity2.value}: ${err.response.data.message}`)

  console.log("how is this function getting searchCity2?");

}

