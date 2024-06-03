import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoListDisplay from "./TodoListDisplay";
import TodoStats from "./TodoStats";
import TodoFooter from "./TodoFooter";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ name: "", done: false });
  return (
    <div>
      <TodoHeader />
      <TodoStats todos={todos} />
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoListDisplay setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoFooter setTodos={setTodos} />
    </div>
  );
}
