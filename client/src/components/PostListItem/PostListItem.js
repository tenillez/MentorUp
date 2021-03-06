import React from "react";

export default class PostListItem extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionSection () {
        if (this.state.isEditing) {
            return (
                <div>
                    <button className="btn btn-dark" onClick={this.editTask.bind(this)}>Save<i className="fa fa-floppy-o" aria-hidden="true"></i></button>
                    <button className="cancel-btn btn" onClick={this.setEditState.bind(this, false)}>Cancel<i className="fa fa-ban" aria-hidden="true"></i></button>
                </div>
            );
        }
        return (
            <div>
                <button className="btn btn-dark" onClick={this.setEditState.bind(this, true)}>Edit<i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button className="delete-btn btn" onClick={this.deleteTask.bind(this)}>Delete<i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        );
    }

    renderTask () {
        const { task } = this.props;
        const taskStyle = {
            cursor: "pointer"
        };

        if (this.state.isEditing) {
            return (
                <div>
                    <form onSubmit={this.editTask.bind(this)}>
                        <input ref="task" defaultValue={task} autoFocus />
                    </form>
                </div>
            );
        }

        return (
            <div onClick={this.toggleTask.bind(this)} className="card-body">
            <p>
            {task}
            </p>
            {this.renderActionSection()}
            </div>
        );
    }

    render () {
        const { isCompleted } = this.props;
        return (
            <div className={"post-" + (isCompleted ? "completed" : "not-completed") }>
                {this.renderTask()}
            </div>
        )
    }

    setEditState (isEditing) {
        this.setState({
            isEditing
        });
    }

    toggleTask () {
        this.props.toggleTask(this.props.id);
    }

    editTask (e) {
        this.props.editTask(this.props.id, this.refs.task.value);
        this.setState({
            isEditing: false
        });
        e.preventDefault();
    }

    deleteTask () {
        this.props.deleteTask(this.props.id);
    }
}