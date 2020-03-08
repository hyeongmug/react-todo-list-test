import React from "react";
export default function(props) {
  /* App.js에서 props 받음 */
  const todos = props.todos;
  const setTodos = props.setTodos;

  /* 체크박스 클릭시 해당 체크박스 토글: 해당 데이터 completed 값변경 후 todos 업데이트 */
  const onCheckboxChange = id => {
    const updatetodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    setTodos(updatetodos);
  };

  /* 삭제 클릭시 todos에서 filter로 비삭제 데이터만 새로운 배열로 만들어서 todos업데이트*/
  const onRemove = id => {
    if (confirm("정말 삭제 하시겠습니까?") === false) return;
    const updatetodos = todos.filter(todo => todo.id !== id);
    setTodos(updatetodos);
  };

  const todosList = todos.map(todo => {
    const id = todo.id;
    const completed = todo.completed;
    /* completed가 true면 취소선 <del>태그 추가 */
    const text = completed ? <del>{todo.text}</del> : todo.text;

    return (
      <li className="list-group-item" key={id}>
        <div className="media">
          <div className="custom-control custom-checkbox my-1 mr-sm-2">
            <input
              type="checkbox"
              className="custom-control-input"
              id={"check" + id}
              checked={completed ? "checked " : ""}
              onChange={() => {
                onCheckboxChange(id);
              }}
            />
            <label
              className="custom-control-label"
              htmlFor={"check" + id}
              style={{ fontSize: 0 }}
            />
          </div>
          <label htmlFor={"check" + id} className="media-body text-left">
            {text}
          </label>
          <button
            type="button"
            className="btn btn-danger ml-1 btn-sm"
            onClick={() => onRemove(id)}
          >
            삭제
          </button>
        </div>
      </li>
    );
  });

  return <ul className="list-group">{todosList}</ul>;
}
