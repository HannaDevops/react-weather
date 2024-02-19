import React, {useState} from "react";
import axios from "axios";

export default function Weather(props){
    let [pName, setpName] = useState("");
    const api = axios.create({
        headers: { Pragma: 'no-cache' },
      });

    function displayTemper(response){
         
        setpName(
        <div className="showTemper">
        <ul>
          <li>Temperature: {Math.round(response.data.temperature.current)}°C</li>
          <li>Description: {response.data.condition.description}</li>
          <li>Humidity: {response.data.temperature.humidity}%</li>
          <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
         
        </ul>
      </div>
      )
       
    
    }

    
        let apiKey = "35af20a51228d76bt18bb4ac458c490o";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.cityName}&key=${apiKey}&units=metric`;
        api.get(apiUrl, api).then(displayTemper);
      

    return(
        <h2>{pName}</h2>
    )
}