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
                <div className="col-lg-7">
                    <h3>Community Posts</h3>
                    <p>Have a question, or an answer? Please contribute below</p>
                    <div className="card">
                        <div className="card-title">Coding Languages</div>
                        <div className="card-body">
                            <p>
                                I'm new to coding and have been learning on my own.  What languages do you recommend besides Javascript for beginners?
                        </p>
                            <div className="btn-group">
                                <button className="btn btn-dark"><i className="fa fa-plus" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">Looking to break into the business</div>
                        <div className="card-body">
                            <p>
                                What can I do to improve my chances of finding a tech job?
                        </p>
                            <div className="btn-group">
                                <button className="btn btn-dark"><i className="fa fa-plus" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">Ideas for new projects</div>
                        <div className="card-body">
                            <p>
                                Anyone interested in collaboration on new ideas?
                        </p>
                            <div className="btn-group">
                                <button className="btn btn-dark"><i className="fa fa-plus" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <button className="btn btn-dark"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
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