import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import LightDarkMode from "./components/LightDarkMode";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  const [submitType, setSubmitType] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFormSubmission = () => {
    // console.log(input);

    if (submitType?.title) {
      let currentTodo = todos.filter((item) => item.id !== submitType.id);

      let newItem = {
        userId: submitType?.userId,
        id: submitType?.id,
        title: input,
        completed: submitType?.completed,
      };

      let newTodos = [...currentTodo, newItem];

      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setSubmitType(null);
      setInput("");

      // setTodos((prevState) => [
      //   ...prevState,
      //   {
      //     userId: 1,
      //     id: todos.length + 1,
      //     title: input,
      //     completed: false,
      //   },
      // ]);
    } else {
      setTodos((prevState) => [
        ...prevState,
        {
          userId: 1,
          id: todos.length + 1,
          title: input,
          completed: false,
        },
      ]);

      localStorage.setItem("todos", JSON.stringify(todos));
    }

    setInput("");
  };

  const deleteTodo = (todo) => {
    let currentTodo = todos.filter((item) => item.id !== todo.id);

    setTodos(currentTodo);
    localStorage.setItem("todos", JSON.stringify(currentTodo));
    // console.log(todo);
  };
  const editTodo = (todo) => {
    setSubmitType(todo);

    setInput(todo?.title);
    console.log(todo);
  };

  useEffect(() => {
    handleGetTodos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetTodos = () => {
    let localTodos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    if (localTodos.length) {
      setTodos(localTodos);

      return;
    }

    fetchTodo();
  };

  const fetchTodo = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());

    setTodos(response);

    localStorage.setItem("todos", JSON.stringify(response));

    console.log(response);
  };

  return (
    <div className={darkMode ? "darkMode wrapper" : "wrapper"}>
      <LightDarkMode handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <div className="content">
        <div className="container">
          <AddTodo
            input={input}
            setInput={setInput}
            handleFormSubmission={handleFormSubmission}
            submitType={submitType}
          />
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
