import React from "react";
import List from "./list";
function Card(props) {
    let personalstyle = {
        marginTop: "70px"
    }
    return (

        <div className="carousel-cell">

            <div className="card-inner">
                <p className="heading">
                    <p style={{ float: "right" }}>{props.emoji}</p>
                    {props.title}
                </p>
                <p className="paragraph">{props.paragraph}</p>
                <List
                    li_1={props.li_1}
                    li_2={props.li_2}
                    li_3={props.li_3}
                />
                <a className="btn" style={props.id == 2 ? personalstyle : null}>Get Started</a>
                <a className="btn btn1">request Demo</a>
                <a>learn more</a>


            </div>
        </div>
    )
}

export default Card;