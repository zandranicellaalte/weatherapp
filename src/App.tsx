import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [all, setAll] = useState({
        latitude: "",
        longitude: "",
    });
    const [error, setError] = useState({});

    console.log("All", all);

    useEffect(() => {
        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
        )
            .then((response) => response.json())
            .then((res) => setAll(res))
            .catch((err) => setError(err));
    }, [error]);

    return (
        <div className="App">
            <header className="App-header">
                <nav className="App-nav">
                    <p>About</p>
                    <p>Contakt</p>
                </nav>
                <div className="App-content">
                    <div>
                        <h1>Weather App</h1>
                        <p>Undertext</p>
                    </div>
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input
                            type="text"
                            className="App-Input"
                            placeholder="Search"
                        />
                    </div>
                    <button className="App-Button">Submit</button>
                </div>
                <div className="App-footer">
                    <p>
                        Latitude {all.latitude} and Longitude {all.longitude}
                    </p>
                </div>
            </header>
            <div className="App-startside">
                <div></div>
            </div>
        </div>
    );
}

export default App;
