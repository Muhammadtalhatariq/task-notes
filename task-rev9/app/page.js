"use client";
import React, { useEffect, useState } from "react";
import { TodoProvider } from "@/Contexts";
import TodoForm from "@/Components/TodoForm";
import Popup from "@/Components/popup";
import Addtodo from "@/Components/Addtodo";
import Alltodos from "@/Components/Alltodos";

const page = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(true);
    console.log("hello");
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex justify-center items-center">
        <div className="min-h-screen w-[750px] pt-10 bg-primary dark:bg-gray-900 dark:text-white">
          <div className="w-full text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-black">
              TODO LIST
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="pt-[30px]">
              <Alltodos todos={todos} />
            </div>

            <div className="relative w-full">
              <div className="absolute  top-40 right-0">
                <Addtodo handleOrderPopup={handleOrderPopup} />
              </div>
            </div>

            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default page;
