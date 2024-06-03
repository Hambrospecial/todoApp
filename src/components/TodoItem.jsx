import styles from "../styles/todoitem.module.css";
export default function TodoItem({ todo, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.name !== item));
  }

  function toggleDone() {
    setTodos(
      todos.map((t) => (t.name === todo.name ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <div
      className={
        todo.done
          ? `${styles.display_item} ${styles.done}`
          : styles.display_item
      }
      onClick={toggleDone}
    >
      {todo.name}{" "}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(todo.name);
        }}
      >
        x
      </button>
    </div>
  );
}
