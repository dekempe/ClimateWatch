function WeatherStation(id, location, temperature, humidity){
    this.id = id;
    this.location = location;
    this.temperature = temperature;
    this.humidity = humidity;
    this.img = calculateImage(temperature, humidity);
}

function calculateImage(temp, hum){
	if(temp > 25){
		return 'images/hot.png';
	} else if( temp < 20){
		return 'images/cold.png';
	} else {
		if(hum > 70){
			return 'images/moist.png';
		} else if(hum < 40){
			return 'images/dry.png';
		} else {
			return 'images/good.png';
		}
	}
	return 'something went terribly wrong..';
}