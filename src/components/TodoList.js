import React from 'react';
import Todo from './Todo';



const TodoList = props => {

    const { todos } = props;

    const handleClick = () => {
        props.handleClearTodo();
    }

    return (
        <div className='todoList'>
            {todos.map(todo => (
                <Todo handleToggleItem={props.handleToggleTodo} key={todo.id} item={todo} />
                ))}
            <button onClick={handleClick}>
                Clear Todo
            </button>
        </div>
    )  
}

export default TodoList;
