import React from "react";
import "../styles/App.css";

function TodaysDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    return (
        <div className="TodayDate">
            <p className="Date">{day + "/" + month + "/" + year}</p>
            <p className="Time">{hours + ":" + minutes}</p>
        </div>
    );
}

export default TodaysDate;
