import { useEffect, useRef } from "react";

export default function MyComponent() {
    const buttonRef = useRef(null);
    console.log(buttonRef);
    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.onfocus;
        }
    }, []);
    return (
    <div>
        <button ref={buttonRef}>Click me</button>
        <button>button</button>
        <button>button</button>
        </div>)
}