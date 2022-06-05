import React from "react";
import content2 from "./content2";
import Box from "./box";
function BOxCreation(input) {
    return (
        <Box
            id={input.id}
            key={input.id}
            title={input.title}
            paragraph={input.paragraph}
            imageUrl={input.imageUrl}
            link1={input.link1}
            link2={input.link2}
        />

    )
}
function BoxCreated() {
    return (
        <div>
            {content2.map(BOxCreation)}
        </div>
    )
}
export default BoxCreated;