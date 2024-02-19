import React from "react";
import axios from "axios";

export default function Weather(props){
    function displayTemper(response){
        //console.log(response.data);
    //    let cityElem = document.querySelector("#city");
    //    let temperElem = document.querySelector("#temper");
    //    let descriptionElem = document.querySelector("#description");
    //    let humidElem = document.querySelector("#humid");
    //    let windElem = document.querySelector("#wind");
    //    let nowtimeElem = document.querySelector("#nowtime");
    //   let iconElem = document.querySelector("#w-icon");
    //    cityElem.innerHTML = response.data.city;
    //    celsTemp = response.data.temperature.current;
    //    temperElem.innerHTML = Math.round(celsTemp);
    //    descriptionElem.innerHTML =response.data.condition.description;
    //    humidElem.innerHTML = response.data.temperature.humidity;
    //    windElem.innerHTML = Math.round(response.data.wind.speed);
     //   nowtimeElem.innerHTML = formatDate(response.data.time * 1000);
     //   iconElem.setAttribute("src", `${response.data.condition.icon_url}`);
    //    dispalyForecast(response.data.coordinates);
    alert(`The weather in city ${response.data.city} is ${response.data.temperature.current}`);
    }

    
        let apiKey = "35af20a51228d76bt18bb4ac458c490o";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.cityName}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayTemper);
      

    return(
        <h2>Weather</h2>
    )
}