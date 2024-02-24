import React, {useState} from "react";
import axios from "axios";

export default function Weather(){
    let [pName, setpName] = useState("");
    let [cityName, setcityName] = useState("");

    const api = axios.create({
        headers: { Pragma: 'no-cache' },
      });

      function setName(event) {
        setcityName(event.target.value);
      }

  function handleSubmit(event) {
    event.preventDefault();
    if (cityName.length > 0) {
      let apiKey = "35af20a51228d76bt18bb4ac458c490o";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
      api.get(apiUrl, api).then(displayTemper);
       
    } else {
      setpName("");
    }
  }

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

    
      
      

    return(
      <div className="formsearch">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={setName} />
        <input type="submit" value="Search" />
      </form>
      <p>{pName}</p>
    </div>
    )
}