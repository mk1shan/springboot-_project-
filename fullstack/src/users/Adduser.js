import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export default function Adduser() {
    const navigate = useNavigate(); // Initialize useNavigate correctly

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/user", user);
            navigate("/"); // Navigate to the home page after successful submission
        } catch (error) {
            console.error("Error occurred while submitting:", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Employee</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                User Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your user name"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <button type="button" className="btn btn-outline-danger mx-2" onClick={() => navigate("/")}>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
