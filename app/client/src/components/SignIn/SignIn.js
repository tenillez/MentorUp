import React, { Component } from "react";

class SignIn extends Component {
    // Setting the component's initial state
    state = {
        username: "",
        password: "",
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
            username: "",
            password: "",
            password1: "",
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="signinForm">
                            <h3>Login Here</h3>
                            <p>
                                <hr />
                            </p>
                            <form>
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
        
export default SignIn;