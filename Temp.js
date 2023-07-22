function temperatureConverter(temperature, unit) {
    var convertedTemperature;
  
    if (unit === "celsius") {
      convertedTemperature = (temperature * 9 / 5) + 32;
    } else {
      convertedTemperature = (temperature - 32) * 5 / 9;
    }
  
    document.getElementById("outputTemperature").innerHTML = convertedTemperature;
  }
  
  document.getElementById("convertButton").addEventListener("click", function() {
    var temperature = document.getElementById("inputTemperature").value;
    var unit = document.getElementById("temperatureUnit").value;
  
    temperatureConverter(temperature, unit);
  });