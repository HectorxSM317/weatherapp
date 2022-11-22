const getFormattedAirports = (weather, icaoCode) => {
  return response = weather.map((w) => {
    return {
      weatherMain: w.weather[0].main,
      weatherDescription: w.weather[0].description,
      mainTemp: w.main.temp,
      mainFeelsLike: w.main.feels_like,
      mainTempMin: w.main.temp_min,
      mainTempMax: w.main.temp_max,
      mainPressure: w.main.pressure,
      mainSeaLevel: w.main.sea_level,
      mainGrndLevel: w.main.grnd_level,
      mainHumidity: w.main.humidity,
      mainTempKf: w.main.temp_kf,
      clouds: w.clouds.all,
      windSpeed: w.wind.speed,
      windDeg: w.wind.deg,
      windGust: w.wind.gust,
      icaoCode,
      created_at: w.dt_txt
    };
    
  });
  
};

module.exports = { getFormattedAirports };
