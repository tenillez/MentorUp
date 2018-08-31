import React, { Component } from "react";

class SignUp extends Component {
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
        } else if (this.state.password!==this.state.password1) {
            alert(
                `Passwords do not match. Please try again ${this.state.username}`
            )
        }
        else {
            alert(`Welcome ${this.state.username}`);
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="signupForm">
                            <h3>Please create an account to begin.</h3>
                            <p>
                                <hr />
                            </p>
                            <form>
                                <div className="form-group">
                                    <input
                                        value={this.state.firstName}
                                        name="firstName"
                                        onChange={this.handleInputChange}
                                        type="text-area"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={this.state.lastName}
                                        name="lastName"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={this.state.password1}
                                        name="password1"
                                        onChange={this.handleInputChange}
                                        type="password"
                                        placeholder="Verify Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <br />
                                <div className="form-group" id="pic"><h4>Add a Profile Picture</h4>
                                    <input 
                                        value={this.state.picture}
                                        name="form-control-file" 
                                        onChange={this.handleInputChange}
                                        type="file" 
                                    />
                                </div>
                                    <div className="form-group">
                                        <button className="btn btn-secondary" onClick={this.handleFormSubmit}>Submit</button>
                                        {/* we will need to do more with this handleFormSubmit change for authentication and pushing to db */}
                                    </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        
export default SignUp;