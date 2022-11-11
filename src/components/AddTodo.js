import React from "react";

const AddTodo = ({ setInput, input, handleFormSubmission, submitType }) => {
  const submitForm = (e) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    handleFormSubmission();

    // console.log(input);
  };
  return (
    <>
      <h2>Todo App</h2>
      <form className="form" onSubmit={submitForm}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit">{submitType?.title ? "Update" : "Submit"}</button>
      </form>
    </>
  );
};

export default AddTodo;
