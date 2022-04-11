import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
	const [user] = useAuthState(auth);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	// const [error, setError] = useState("");
	const handleName = (event) => {
		setName(event.target.value);
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePhoneNumber = (event) => {
		setPhone(event.target.value);
	};
	const handleAddress = (event) => {
		setAddress(event.target.value);
	};
	const handleFormSubmit = (event) => {};
	return (
		<div className="form-container">
			<div>
				<h1 className="form-title">Shipping Information</h1>
				<form onSubmit={handleFormSubmit}>
					<div className="input-group">
						<label htmlFor="name">Name</label>
						<input onBlur={handleName} type="text" id="name" required />
					</div>
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							value={user?.email}
							readOnly
							type="email"
							id="email"
							required
						/>
					</div>
					<div className="input-group">
						<label htmlFor="phone">Phone Number</label>
						<input
							onBlur={handlePhoneNumber}
							type="number"
							id="phone"
							required
						/>
					</div>
					<div className="input-group">
						<label htmlFor="address">Address</label>
						<input onBlur={handleAddress} type="text" id="address" required />
					</div>
					<input className="submit-btn" type="submit" value="Add Shipping" />
				</form>
			</div>
		</div>
	);
};

export default Shipment;
