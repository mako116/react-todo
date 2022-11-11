import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  //   console.log(todos);

  const newTodo = todos
    ? todos.slice().sort(function (a, b) {
        return a.id < b.id ? -1 : 1;
      })
    : [];

  return (
    <div className="todolist">
      {newTodo && newTodo?.length ? (
        newTodo?.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      ) : (
        <div className="text-center">
          <p>No Todo list</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
