import React from "react";
import PostList from "../PostList";
import CreatePost from "../CreatePost";
//import "./todostyle.css";

const todos = {
    items: [],
    lsKey: "posts",
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
        let postItem = this.items[id];
        postItem.isCompleted = !postItem.isCompleted;
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
        let postItem = this.items[id];
        postItem.task = task;
        this.save();
    }
};

posts.populate();


export default class PostApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: posts.items
        };
    }
    render() {
        return (
            <div className="posts">
                <h1>Goals</h1>
                <hr />
                <div className="row">
                    <div className="col-lg-6">
                    <h3>Add your own goals below</h3>
                        <hr />

                        <CreatePost
                            createTask={this.createTask.bind(this)}
                        />
                    </div>
                    <div className="col-lg-6">
                        <PostList
                            posts={this.state.posts}
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
        posts.add({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.posts });
    }

    toggleTask(taskId) {
        posts.toggle(taskId);
        this.setState({ posts: this.state.posts });
    }
    editTask(taskId, task) {
        posts.update(taskId, task);
        this.setState({ posts: this.state.posts });
    }
    deleteTask(taskId) {
        posts.remove(taskId);
        this.setState({ posts: this.state.posts });
    }
}