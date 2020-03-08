import React, { useState } from "react";
export default function TodoList(props) {
  /* App.js에서 props 받음 */
  const todos = props.todos;
  const setTodos = props.setTodos;

  /* States */
  const [nextId, setNextId] = useState(props.nextId); // App.js에서 받은 nextId를 기본값으로 줌
  const [inputText, setInputText] = useState("");

  const onAddTodo = e => {
    e.preventDefault();

    if (inputText.length === 0) {
      /* 추가 버튼 클릭시 입력값이 없으면 경고창 띄움 */
      alert("할 일을 입력하세요.");
      return;
    }

    const updateTodos = todos.concat({
      id: nextId,
      text: inputText
    });

    setTodos(updateTodos);
    setNextId(nextId + 1);
    setInputText("");
  };

  const onInputChange = e => {
    setInputText(e.target.value);
  };

  return (
    <form
      onSubmit={() => {
        onAddTodo(this.event);
      }}
    >
      <div className="input-group">
        <div className="custom-file">
          <input
            type="text"
            className="form-control"
            placeholder="할 일을 입력하세요."
            value={inputText}
            onChange={onInputChange}
          />
        </div>
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              onAddTodo(this.event);
            }}
          >
            추가
          </button>
        </div>
      </div>
    </form>
  );
}
