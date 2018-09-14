import React, { Component } from "react";


import TodoForm from "../TodoForm";
import TodoList from "../TodoList";




class TodoApp extends Component {
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      this.state = {todoItems: todoItems};
    }
    addItem(todoItem) {
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
      });
      this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }
    markTodoDone(itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({todoItems: todoItems});  
    }

    render() {
        return (
          <div id="main">
            
            <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
            <TodoForm addItem={this.addItem} />
          </div>
        );
      }
    }

    export default (TodoApp);