import React from "react";
function Input(props) {
    let text = "Enter Instagram or YouTube or TikTok acount";
    return (
        <div class="inputclass">
            <input type={"input"} placeHolder={text} />
            <button>CLick me</button>
        </div>
    )
}
export default Input;