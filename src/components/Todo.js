import React from 'react';

const Todo = props => {
  const handleClick = () =>{
    props.handleToggleItem(props.todo.id);
  }

  return (
    <div onClick={handleClick} className='todo'>
      <p>{props.todo.name}</p>
    </div>
  );
};

export default Todo;