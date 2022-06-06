import React from "react";
function Input(props) {
    let text = "Enter Instagram or YouTube or TikTok acount";
    return (
        <div className="inputclass">
            <input type={"input"} placeholder={text} />
            <button>CLick me</button>
        </div>
    )
}
export default Input;
