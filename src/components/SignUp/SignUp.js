import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [createUserWithEmailAndPassword, user] =
		useCreateUserWithEmailAndPassword(auth);
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	const handleConfirmPassword = (event) => {
		setConfirmPassword(event.target.value);
	};

	const navigate = useNavigate();
	const createUser = (event) => {
		if (password !== confirmPassword) {
			setError("Your two passwords is not match");
		}
		createUserWithEmailAndPassword(email, password);
		event.preventDefault();
	};
	if (user) {
		navigate("/shop");
	}
	return (
		<div className="form-container">
			<div>
				<h1 className="form-title">Sign Up</h1>
				<form onSubmit={createUser}>
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input onBlur={handleEmail} type="email" id="email" required />
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							onBlur={handlePassword}
							type="password"
							id="password"
							required
						/>
					</div>
					<div className="input-group">
						<label htmlFor="confirm-password">Confirm Password</label>
						<input
							onBlur={handleConfirmPassword}
							type="password"
							id="confirm-password"
							required
						/>
					</div>
					<input className="submit-btn" type="submit" value="Sign Up" />
				</form>
				<p style={{ color: "red ", textAlign: "center" }}>{error}</p>
				<p className="text">
					Already have an account?{" "}
					<Link className="form-link" to="/login" element={<LogIn></LogIn>}>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
