import { useRef, useState } from "react";

export default function EmailInput() {
    const [didSubmit, setDidSubmit] = useState(false);
    const userNameInput = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const username = userNameInput.current.value.toLowerCase();
        // const lowerCaseEmail = emailInput.current.value.toLowerCase()
        console.log(username);
        setDidSubmit(true);
        // setEmail(lowerCaseEmail)
    }

    return (
        <>
            <span>Form submitted:{didSubmit}</span>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">User Name:</label>
                <input type="text" ref={userNameInput} />
                <button type="submit">Sent</button>
            </form>
        </>
    );
}