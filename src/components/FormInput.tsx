import React from "react";
import "../styles/App.css";

const Forminput: React.FC = () => {
    const city = [
        {
            name: "London",
        },
        {
            name: "Berlin",
        },
        {
            name: "Paris",
        },
        {
            name: "Stockholm",
        },
        {
            name: "Oslo",
        },
        {
            name: "Budapest",
        },
    ];

    const [locationSearch, setLocationSearch] = React.useState<
        { name: string }[] | undefined
    >(city);
    const [text, setText] = React.useState<string>("");

    const handleOnClick = () => {
        const searchCity =
            locationSearch && locationSearch?.length > 0
                ? locationSearch?.filter((c) => c?.name === text)
                : undefined;
        setLocationSearch(searchCity);
    };

    return (
        <div className="App-content">
            <h1>Weather App</h1>
            <form className="search">
                <i className="fa fa-search"></i>
                <input
                    type="text"
                    id="search"
                    className="App-Input"
                    placeholder="Search location . . ."
                    autoComplete="off"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setLocationSearch(city);
                    }}
                />
            </form>
            <button
                className="App-Button"
                disabled={!text}
                onClick={handleOnClick}
            >
                {" "}
                Search
            </button>
            <div>
                {locationSearch && locationSearch?.length === 0 && (
                    <p>No User Found</p>
                )}

                {locationSearch &&
                    locationSearch?.length > 0 &&
                    locationSearch?.map((city, i) => {
                        return <p key={i}>{city?.name}</p>;
                    })}
            </div>
        </div>
    );
};

export default Forminput;
