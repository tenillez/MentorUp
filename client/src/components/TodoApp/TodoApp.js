import React from "react";
import TodosList from "../TodoList"
import CreateTodo from "../CreateTodo";
import css from "./todostyle.css";

const todos = {
    items: [],
    lsKey: "todos",
    populate() {
        this.items = this.get();
    },
    get() {
        try {
            return JSON.parse(localStorage.getItem(this.lsKey)) || []
        } catch (e) { }
        return [];
    },
    save() {
        localStorage.setItem(this.lsKey, JSON.stringify(this.items));
    },
    toggle(id) {
        let todoItem = this.items[id];
        todoItem.isCompleted = !todoItem.isCompleted;
        this.save();
    },
    add(obj) {
        this.items.push(obj);
        this.save();
    },
    remove(id) {
        this.items.splice(id, 1);
        this.save();
    },
    update(id, task) {
        let todoItem = this.items[id];
        todoItem.task = task;
        this.save();
    }
};

todos.populate();


export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todos.items
        };
    }
    render() {
        return (
            <div className="goals">
                <h1>Goals</h1>
                <hr />
                <div className="row">
                    <div className="col-lg-6">
                    <h3>Add your own goals below</h3>
                        <hr />

                        <CreateTodo
                            createTask={this.createTask.bind(this)}
                        />
                    </div>
                    <div className="col-lg-6">
                        <TodosList
                            todos={this.state.todos}
                            toggleTask={this.toggleTask.bind(this)}
                            editTask={this.editTask.bind(this)}
                            deleteTask={this.deleteTask.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }

    createTask(task) {
        task = task.trim();
        if (!task) { return; }
        todos.add({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    toggleTask(taskId) {
        todos.toggle(taskId);
        this.setState({ todos: this.state.todos });
    }
    editTask(taskId, task) {
        todos.update(taskId, task);
        this.setState({ todos: this.state.todos });
    }
    deleteTask(taskId) {
        todos.remove(taskId);
        this.setState({ todos: this.state.todos });
    }
}