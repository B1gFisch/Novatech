import React, { useState } from "react";
import axios from "../axiosconfig";
import "./stylesheet/login.style.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("/auth/login", { username, password });
            const token = res.data.token;

            localStorage.setItem("jwtToken", token);

            navigate("/admin");
        } catch (err) {
            setError("Login fehlgeschlagen");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default LoginPage;
