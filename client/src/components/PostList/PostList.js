import React from "react";
// import TodosListHeader from "./todos-list-header";
import PostListItem from "../PostListItem";

export default class PostList extends React.Component {
    renderItems () {
        return this.props.posts.map((c, index) => {
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
        if (!this.props.posts.length) {
            return (
                <div className="container">
            <div className="row">
            
            </div>
            </div>
            )
        }
        return (
                    <div className="card">
                    {this.renderItems()}
                    </div>
            // <table>
                // <TodosListHeader /> */}
                // <tbody>
                // </tbody>
            // </table>
        )
    }
}