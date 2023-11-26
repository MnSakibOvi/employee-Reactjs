import { useState } from "react";
import axios from "axios";
import "./AddUserForm.css";

function AddUserForm() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        isBlocked: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const updatedUsers = [...existingUsers, user];

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setUser({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            isBlocked: false
        });

        try {
            const response = await axios.post("your_api_endpoint_here", user);
            console.log("Server response:", response.data);
        } catch (error) {
            console.error("Error sending data to the server:", error);
        }
    };

    return (
        <div className="add-user-form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    required
                    value={user.firstName}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            firstName: e.target.value,
                        });
                    }}
                />
                <br />
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    value={user.lastName}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            lastName: e.target.value,
                        });
                    }}
                />
                <br />
                <br />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={user.email}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value,
                        });
                    }}
                />
                <br />
                <br />
                <label htmlFor="phone">Phone Number: </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    required
                    value={user.phone}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            phone: e.target.value,
                        });
                    }}
                />

                <br />
                <br />
                <button type="submit" className="nav-button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddUserForm;
