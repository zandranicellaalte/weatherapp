import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    // const [latitude, setLatitude] = useState()
    // const [longitude, setLongitude] = useState()
    const [all, setAll] = useState({
        latitude: "",
        longitude: "",
    })
    const [error, setError] = useState({})

    console.log("All", all);

    useEffect(() =>{
        fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
        .then(response => response.json())
        .then(res => setAll(res))
        .catch(err => setError(err))
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>WeatherApp</h1>
                <div>
                Latitude {all.latitude} and Longitude {all.longitude}
                </div>
            </header>
        </div>
    );
}

export default App;
