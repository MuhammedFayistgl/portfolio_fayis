import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useToasts } from "react-toast-notifications";
const Login: React.FunctionComponent = () => {
    const { addToast } = useToasts();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;
    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                // "https://portfolio-backend-75ja.onrender.com/v1/users/signup",
                "http://localhost:5000/v1/users/signup",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                addToast(success, { appearance: "success" });
            } else {
                addToast(message, { appearance: "error" });
            }
        } catch (error) {
            const message = (error as { message: string }).message;
            console.log(error);
            addToast(message, { appearance: "error" , autoDismiss: true,});
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
        });
    };

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="form_container">
                <h2>Signup Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Username</label>
                        <input type="text" name="username" value={username} placeholder="Enter your username" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <span>
                        Already have an account? <Link to={"/login"}>Login</Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
