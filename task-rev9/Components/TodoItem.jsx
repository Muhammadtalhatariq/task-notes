"use client";
import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    // console.log(todo.id);
    toggleComplete(todo.id);
  };


  

  return (
    <div
      className={`flex border-b  px-3 py-1.5 gap-x-3 font-bold  text-black`}
    >
      <input
        type="checkbox"
        className="cursor-pointer text-black w-[26px] h-[26px]"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={` outline-none w-full bg-transparent text-bold rounded-lg ${
          todo.completed ? " line-through text-gray-500" : ""
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-[18px] h-[18px] rounded-lg justify-center items-center"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
       <img src="edit.png" alt="" />
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-[18px] h-[18px] rounded-lg text-sm justify-center items-center"
        onClick={() => deleteTodo(todo.id)}
      >
      <img src="delete.png" alt="" />
      </button>
    </div>
  );
};

export default TodoItem;
