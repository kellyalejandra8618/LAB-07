import { useState } from "react";

export const RandomComponent = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h2>Random Component</h2>
            <p>El contador actual es: {count}</p>
            <button onClick={increment} style={{ marginRight: "10px" }}>Incrementar</button>
            <button onClick={reset}>Resetear a 0</button>
        </div>
    );
};
