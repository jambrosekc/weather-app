body {
  font-family: arial, sans-serif;
  background-color: #f9f7fe !important;
}

.App {
  max-width: 800px;
  margin: 60px auto;
}

.Weather {
  font-family: "Cerebri-Sans", Helvetica, Arial, sans-serif;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 30px 50px rgba(65, 50, 100, 0.08);
  padding: 40px;
  color: rgb(135, 135, 135);
}

.Weather .logo {
  max-width: 150px;
  display: block;
}

.Weather form {
  margin-top: 40px;
  border-bottom: 1px solid #f9f7fe;
  padding-bottom: 30px;
}

.Weather .search-input {
  background: #f9f7fe;
  border: none;
  padding: 15px 20px;
  display: inline-block;
  border-radius: 6px;
  color: rgba(39, 33, 66, 0.4);
  font-size: 16px;
  height: 50px;
  line-height: 20px;
}

.Weather .btn {
  background: #885df1;
  font-weight: bold;
  font-size: 16px;
  padding: 15px 0;
  border: none;
  height: 50px;
}

.Weather .search-input::placeholder {
  line-height: 20px;
  color: rgba(39, 33, 66, 0.4);
}

.Weather h1 {
  margin: 20px 0 10px 0;
  line-height: 29px;
  font-weight: bold;
  font-size: 38px;
  line-height: 48px;
  color: #272142;
}

.Weather ul {
  margin: 0;
  padding: 0;
}

.Weather li {
  font-weight: 500;
  margin-bottom: 5px;
  color: rgba(39, 33, 66, 0.4);
  font-size: 16px;
  line-height: 20px;
  list-style: none;
}

.humidity-perc, .wind-perc {
  color: #f65282;
  font-weight: normal;
}

.Weather .temperature {
  font-weight: bold;
  color: rgb(33, 33, 33);
  margin-left: 5px;
  font-weight: 400;
  margin-left: 10px;
  font-weight: bold;
  font-size: 80px;
  line-height: 1;
}

.Weather canvas {
  margin: 10px 0;
}

.temp-display {
  display: flex;
  flex-direction: row;
}

.Weather .units {
  color: rgb(33, 33, 33);
  font-size: 28px;
  line-height: 36px;
  font-weight: normal;
  position: relative;
  line-height: 1;
}

.Weather footer {
  font-size: 14px;
  margin-top: 40px;
  line-height: 18px;
  text-align: center;
  color: rgba(39, 33, 66, 0.4);
}

.Weather footer a {
  color: #885df1;
}

.WeatherForecast {
  text-align: center;
  margin: 40px 0;
  border-bottom: 1px solid #f9f7fe;
  padding-bottom: 50px;
}

.WeatherForecast .forecast-time {
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: rgba(39, 33, 66, 0.4);
}

.WeatherForecast .forecast-temperature {
  font-style: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #f65282;
  font-weight: bold;
}

.WeatherForecast .forecast-temperature-min {
  margin-left: 10px;
  opacity: 0.6;
}

.Weather .WeatherForecast canvas {
  display: block;
  margin: 20px auto;
}

.WeatherInfo {
  margin-top: 20px;
}

.WeatherInfo .temperature-container {
  margin-top: 30px;
  align-items: center;
}
