import { useState } from "react";
import styles from "../styles/todoinput.module.css";

export default function TodoInput({ todo, setTodo, todos, setTodos }) {
  const tasks = todos.map((item) => item.name);
  const [error, setError] = useState("");

  function handleSubmit(todo) {
    const trimmedName = todo.name.trim();
    if (trimmedName === "") {
      setTodo({ ...todo, name: "" });
      return;
    }
    if (!tasks.includes(trimmedName)) {
      setTodos([...todos, { ...todo, name: trimmedName }]);
      setTodo({ ...todo, name: "" });
      setError("");
    } else {
      setError("task already exists");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }
  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          type="text"
          value={todo.name}
          placeholder="Add a new task"
        />
        <button
          className={styles.inputButton}
          onClick={() => handleSubmit(todo)}
        >
          Add Task
        </button>
      </div>
      <div className={styles.errorWrapper}>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
}
