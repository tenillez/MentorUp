import React, { Component } from "react";
// import "./Form.css";

class SignIn extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        password1: "",
        email: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            alert("Fill out your first and last name please!");
        } else if (this.state.password.length < 6) {
            alert(
                `Choose a more secure password ${this.state.firstName} ${this.state
                    .lastName}`
            );
        } else {
            alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        }

        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            password1: "",
            email: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <p>
                    Hello {this.state.username}
                </p>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.username}
                        name="username"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                    />

                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        value={this.state.password1}
                        name="password1"
                        onChange={this.handleInputChange}
                        type="password1"
                        placeholder="Password"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="E-mail"
                    />

                    <button onClick={this.handleFormSubmit}>Submit</button>
                    {/* we will need to do more with this handleFormSubmit change for authentication and pushing to db */}
                </form>
            </div>
        );
    }
}

export default SignIn;