import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoForm from "./components/TodoForm"; // 할 일 추가 폼 컴포넌트
import TodoList from "./components/TodoList"; // 할 일 목록 컴포넌트
export default function App() {
  /* 할 일 목록 데이터 */
  const [todos, setTodos] = useState([
    { id: 1, text: "Hit the gym", completed: false },
    { id: 2, text: "Pay bills", completed: true },
    { id: 3, text: "Meet George", completed: false },
    { id: 4, text: "Buy eggs", completed: false },
    { id: 5, text: "Read a book", completed: false },
    { id: 6, text: "Organize office", completed: false }
  ]);

  return (
    <div className="App">
      <div className="container">
        <div className="header mb-3">
          <h2 className="mt-5 mb-5">My To Do List</h2>
          {/* 할 일 추가 폼 컴포넌트 */}
          <TodoForm todos={todos} setTodos={setTodos} nextId={7} />
        </div>
        {/* 할 일 목록 컴포넌트 */}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
