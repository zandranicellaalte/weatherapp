import React from "react";
import "./styles/App.css";
import TodaysDate from "./components/TodaysDate";
import Forminput from "./components/FormInput";

type Weather = {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    rain: {
        "1h"?: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
};

const weatherdata: Weather = {
    coord: {
        lon: 10.99,
        lat: 44.34,
    },
    weather: [
        {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
        },
    ],
    base: "stations",
    main: {
        temp: 298.48,
        feels_like: 298.74,
        temp_min: 297.56,
        temp_max: 300.05,
        pressure: 1015,
        humidity: 64,
        sea_level: 1015,
        grnd_level: 933,
    },
    visibility: 10000,
    wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
    },
    rain: {
        "1h": 3.16,
    },
    clouds: {
        all: 100,
    },
    dt: 1661870592,
    sys: {
        type: 2,
        id: 2075663,
        country: "IT",
        sunrise: 1661834187,
        sunset: 1661882248,
    },
    timezone: 7200,
    id: 3163858,
    name: "Zocca",
    cod: 200,
};

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="App-nav">
                    <p>About</p>
                    <p>Contact</p>
                </nav>
                <Forminput />
                <div className="App-footer">
                    <p>
                        Latitude {weatherdata.coord.lat} and Longitude{" "}
                        {weatherdata.coord.lon}
                    </p>
                </div>
            </header>
            <div className="App-startside">
                <div className="card">
                    <TodaysDate />
                    <h2 className="Rubrik">{weatherdata.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default App;
