import React, { useReducer, useState } from "react";
import "./App.css";
// First Time so yin
// Git Test
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length + 1,
          timeToDo: Date.now(),
          title: action.title,
          isCompleted: false,
        },
      ];
    case "remove":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isCompleted: true } : todo
      );
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState("");
  const addtodo = () => {
    if (title.length != 0) {
      dispatch({ type: "add", title: title });
      setTitle("");
    }
  };
  const done = (id) => {
    dispatch({ type: "remove", id: id });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addtodo}>ADD</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className={todo.isCompleted ? "doneline" : "normal"}
              >
                {todo.id} - {todo.title}
                <button onClick={() => done(todo.id)}>Finished</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
