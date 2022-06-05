import React from "react";
function SmallBox(props) {
    let url = props.ImageUrl;

    console.log(props.code);
    let personalstyle = {
        backgroundColor: props.code,
    }
    return (
        <div class="smallBoxclass" style={personalstyle}>
            <img src={url} />

            <div className="divsmallone">
                <p>{props.link}</p>
                <h2>{props.title}</h2>
                <a>{props.text}</a>
            </div>

            <div className="divsmalltow">
                <span>csq</span>
                <span>subscrib</span>
                <span>averageview</span>
            </div>
            <div className="divsmallthree">
                <span >{props.number1}</span>
                <sapn>{props.number}</sapn>
                <span>{props.number3}</span>2
            </div>

        </div>
    )
}
export default SmallBox;