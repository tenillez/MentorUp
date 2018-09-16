import React from "react";

export default class TodosListItem extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionSection () {
        if (this.state.isEditing) {
            return (
                <td>
                    <button className="btn btn-dark" onClick={this.editTask.bind(this)}>Save<i className="fa fa-floppy-o" aria-hidden="true"></i></button>
                    <button className="cancel-btn btn" onClick={this.setEditState.bind(this, false)}>Cancel<i className="fa fa-ban" aria-hidden="true"></i></button>
                </td>
            );
        }
        return (
            <td>
                <button className="btn btn-dark" onClick={this.setEditState.bind(this, true)}>Edit<i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button className="delete-btn btn" onClick={this.deleteTask.bind(this)}>Delete<i className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
        );
    }

    renderTask () {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            cursor: "pointer"
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.editTask.bind(this)}>
                        <input ref="task" defaultValue={task} autoFocus />
                    </form>
                </td>
            );
        }

        return (
            <td onClick={this.toggleTask.bind(this)} style={taskStyle}>{task}</td>
        );
    }

    render () {
        const { isCompleted } = this.props;
        return (
            <tr className={"todo-" + (isCompleted ? "completed" : "not-completed") }>
                {this.renderTask()}
                {this.renderActionSection()}
            </tr>
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