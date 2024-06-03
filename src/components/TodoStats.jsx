import styles from "../styles/todostats.module.css";

export default function TodoStats({ todos }) {
  const completedTasks = todos.filter((todo) => todo.done);
  return (
    <div className={styles.stats}>
      <div className={styles.statsItem}>
        <span>{todos.length}</span>
        <label>Total Tasks</label>
      </div>
      <div className={styles.statsItem}>
        <span>{completedTasks.length}</span>
        <label>Completed Tasks</label>
      </div>
    </div>
  );
}
