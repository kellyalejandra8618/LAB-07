import { useState } from "react";

export const CompWithProps = (props) => {
    const [text, setText] = useState("");

    function handleInputChange(event) {
        setText(event.target.value);
    }

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>{props.title}</h1>
            <input
                type="text"
                value={text}
                onChange={handleInputChange}
                style={{ padding: "10px", fontSize: "16px" }}
            />
            <h2>User: {text}</h2>
        </div>
    );
};
