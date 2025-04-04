import { useEffect, useRef, useState } from "react";

function MyComponent() {
    const buttonRef = useRef(null);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    console.log(buttonRef);
    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
            setMessage("Button is auto-focused!");
        }
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p>{message}</p>
            <button
                ref={buttonRef}
                onClick={() => setCount(count + 1)}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: count % 2 === 0 ? "lightblue" : "lightcoral",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Click Me ({count})
            </button>
        </div>
    );
}

export default MyComponent;
