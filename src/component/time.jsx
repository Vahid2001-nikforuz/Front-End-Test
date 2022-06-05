import React, { useState } from "react";

function Time() {
    setInterval(updateTime, 1000);
    const now = new Date().toLocaleTimeString('en-US', {
        // en-US can be set to 'default' to use user's browser settings
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const [timeValue, setTime] = useState(now);
    function updateTime() {
        const newtime = new Date().toLocaleTimeString('en-US', {
            // en-US can be set to 'default' to use user's browser settings
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        console.log(newtime)
        setTime(newtime);
    };
    return (
        <h1 class="time">{timeValue}</h1>
    )



}
export default Time;