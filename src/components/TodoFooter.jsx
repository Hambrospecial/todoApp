import styles from "../styles/todofooter.module.css";
export default function TodoFooter({ setTodos }) {
  function handleClearTasks() {
    setTodos([]);
  }
  return (
    <div className={styles.footer} onClick={() => handleClearTasks()}>
      Clear All Tasks
    </div>
  );
}
