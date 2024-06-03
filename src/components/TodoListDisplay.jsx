import styles from "../styles/todolistdisplay.module.css";
import TodoItem from "./TodoItem";
export default function TodoListDisplay({ setTodo, todos, setTodos }) {
  return (
    <div className={styles.displayWrapper}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          setTodo={setTodo}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
