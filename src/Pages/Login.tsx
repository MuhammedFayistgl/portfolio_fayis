import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useToasts } from "react-toast-notifications";
import { useCookies } from "react-cookie";

const Signup: React.FC = () => {
	const { addToast } = useToasts();
	const [cookies, setCookie] = useCookies();
	const [inputValue, setInputValue] = useState({
		email: "muhammedfayis@gmail.com",
		password: "123456",
	});
	const { email, password } = inputValue;
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"https://portfolio-backend-75ja.onrender.com/v1/users/login",
				// "http://localhost:5000/v1/users/login",
				{
					...inputValue,
				},
				{ withCredentials: true  }
			);
			console.log(data);
			const { success, message } = data;
			if (success) {
				setCookie(data.token)
				addToast(message, { appearance: "success", autoDismiss: true });
			} else {
				addToast(message, { appearance: "error", autoDismiss: true });
			}
		} catch (error) {
			addToast(error?.message, { appearance: "error", autoDismiss: true });
		}
		setInputValue({
			...inputValue,
			email: "muhammedfayis@gmail.com",
		password: "123456",
		});
	};

	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
			<div className="form_container">
				<h2>Login Account</h2>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleOnChange} />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange} />
					</div>
					<button type="submit">Submit</button>
					<span>
						Already have an account? <Link to={"/Sigin"}>Signup</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Signup;
