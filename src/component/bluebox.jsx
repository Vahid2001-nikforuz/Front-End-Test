import React from "react";
function BlueBox(props) {
    return (
        <div className="BlueBoxclass">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
        </div>
    )
}
export default BlueBox;