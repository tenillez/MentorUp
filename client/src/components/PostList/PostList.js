import React from "react";
// import TodosListHeader from "./todos-list-header";
import PostListItem from "../PostListItem";

export default class PostList extends React.Component {
    renderItems () {
        return this.props.todos.map((c, index) => {
            return (
                <PostListItem
                    key={index}
                    {...c}
                    id={index}
                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            )
        });
    }
    render () {
        if (!this.props.todos.length) {
            return <p className="tutorial">What are your goals?</p>;
        }
        return (
            <table>
                {/* <TodosListHeader /> */}
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}