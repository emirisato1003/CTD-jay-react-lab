import { useState } from "react";
import ctdLogo from '../../assets/icons/mono-blue-logo.svg';

export default function AuthForm({ handleCloseAuthForm, handleAuthenticate }) {
    const [email, setEmail] = useState('dev@test.com');
    const [password, setPassword] = useState('password123');

    function handleSubmit(e) {
        e.preventDefault();
        handleAuthenticate({ email, password });
    }
    return (
        <>
            <div className="authFormScreen"></div>
            <form action="" className="authForm">
                <div className="authButtons">
                    <button
                        disabled={!email || !password}
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button type="button" onClick={handleCloseAuthForm}>
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
}