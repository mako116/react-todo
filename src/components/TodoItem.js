import React from "react";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div className="todoitem">
      <h5>{todo?.title}</h5>
      <div className="buttons">
        <i
          className="bx bx-edit-alt hasEdit"
          onClick={() => editTodo(todo)}
        ></i>
        <i
          className="bx bx-trash hasDelete"
          onClick={() => deleteTodo(todo)}
        ></i>
      </div>
    </div>
  );
};

export default TodoItem;
