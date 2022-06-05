import React from "react";

function Box(props) {
    let personalstyle = {
        width: "650px",
        height: "500px",
        float: "right",


    }

    return (
        <div className="Boxclass">
            <img alt="image is not load please check network"
                src={props.imageUrl}
                style={personalstyle} />
            <a className="aBox">
                <span>🎈</span>
                <span>{props.link1}</span>
            </a>
            <h3>{props.title}</h3>
            <p className="pBox">{props.paragraph}</p>
            <a className="a2Box">{props.link2}</a>

        </div>
    )
}
export default Box;