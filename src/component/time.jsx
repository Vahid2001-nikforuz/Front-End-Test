import React, { useState } from "react";

function Time() {
    const now = new Date().toLocaleTimeString('en-US', {
        // en-US can be set to 'default' to use user's browser settings
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const [timeValue, setTime] = useState(now);
    setInterval(updateTime, 1000);


    function updateTime() {
        const newtime = new Date().toLocaleTimeString('en-US', {
            // en-US can be set to 'default' to use user's browser settings
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        setTime(newtime);
    };
    return (
        <h1 className="time">{timeValue}</h1>
    )



}
export default Time;
