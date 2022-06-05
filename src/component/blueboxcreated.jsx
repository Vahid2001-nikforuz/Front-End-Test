import React from "react";
import content3 from "./content3";
import BlueBox from "./bluebox";
function BlueBoxCreation(input) {
    return (
        <BlueBox
            id={input.id}
            key={input.id}
            title={input.title}
            paragraph={input.paragraph}
        />
    )
}
function BlueBoxCreated() {
    return (
        <div>
            {
                content3.map(BlueBoxCreation)
            }
        </div>
    )
}
export default BlueBoxCreated;
