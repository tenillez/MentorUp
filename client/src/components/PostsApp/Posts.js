import React from "react";
import PostList from "../PostList";
import CreatePost from "../CreatePost/CreatePost";
//import "./todostyle.css";

const posts = {
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
            <div>

                    <h3>Community Posts</h3>
                    <p>Have a question, or an answer? Please contribute below</p> 

                        <CreatePost
                            createTask={this.createTask.bind(this)}
                        />
                    <div id="cardRow">
                        <PostList
                            posts={this.state.posts}
                            toggleTask={this.toggleTask.bind(this)}
                            editTask={this.editTask.bind(this)}
                            deleteTask={this.deleteTask.bind(this)}
                        />
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