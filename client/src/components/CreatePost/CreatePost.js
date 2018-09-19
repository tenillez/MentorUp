import React from "react";

export default class CreatePost extends React.Component {
    render () {
        return (
            <form onSubmit={this.onSubmit.bind(this)} className="create-post-form">
                <input type="text" placeholder="Post" ref="taskMessage" autoFocus/>
                <button className="btn btn-dark">Add<i className="fa fa-plus" aria-hidden="true"></i></button>
            </form>
        );
    }
    onSubmit (e) {
        this.props.createTask(this.refs.taskMessage.value);
        this.refs.taskMessage.value = "";
        e.preventDefault();
    }
}