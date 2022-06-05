import React from "react";
import content4 from "./content4"
import SmallBox from "./smallbox";
function SmallBoxCreation(input) {
    return (
        <SmallBox
            key={input.id}
            code={input.code}
            title={input.title}
            link={input.link}
            text={input.text}
            number1={input.number1}
            number2={input.number2}
            number3={input.number3}
            ImageUrl={input.ImageUrl}

        />
    )
}
function SmallBoxCreated() {
    return (
        <div>
            {content4.map(SmallBoxCreation)}
        </div>
    )
}
export default SmallBoxCreated;