import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SignUp from "../SignUp/SignUp";
import "./LogIn.css";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [error, setError] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleLogIn = (event) => {
		event.preventDefault();
		signInWithEmailAndPassword(email, password);
	};
	if (user) {
		navigate(from, { replace: true });
	}
	return (
		<div className="form-container">
			<div>
				<h1 className="form-title">Login</h1>
				<form onSubmit={handleLogIn}>
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
					<input className="submit-btn" type="submit" value="Login" />
				</form>
				<p>{error?.message}</p>
				{loading && <p>Loading...</p>}
				<p className="text">
					New to Ema-john?{" "}
					<Link className="form-link" to="/signup" element={<SignUp> </SignUp>}>
						Create New Account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LogIn;
