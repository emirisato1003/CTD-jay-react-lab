import { useState } from "react";
import ctdLogo from '../../assets/icons/mono-blue-logo.svg';

export default function AuthForm({ authError, handleAuthenticate, setIsAuthDialogOpen }) {
    const [email, setEmail] = useState('dev@test.com');
    const [password, setPassword] = useState('password123');
    // console.log(email);
    function handleSubmit(e) {
        e.preventDefault();
        handleAuthenticate({ email, password });
    }
    return (
        <>
            <div className="authFormScreen"></div>
            <form action="" className="authForm">
                <div className="siteBranding">
                    <img src={ctdLogo} alt="" style={{ height: '50px' }} />
                    <h2>Log in to CTD Swag</h2>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email </label>
                    <input type="text" autoComplete="off" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete="off" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="authButtons">
                    <button
                        disabled={!email || !password}
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button type="button" onClick={() => setIsAuthDialogOpen(prev => !prev)}>
                        Cancel
                    </button>
                </div>
                {authError &&
                    <div className="authErrorMessage">
                        <p>{authError}</p>
                    </div>
                }
            </form>
        </>
    );
}