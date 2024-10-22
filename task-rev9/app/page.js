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
      <div className="flex justify-center items-center w-full bg-primary text-black dark:bg-gray-900 dark:text-white">
        <div className="min-h-screen md:w-[750px] pt-10 ">
          <div className="w-full">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2 ">
              TODO LIST
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="py-[30px]">
              <Alltodos todos={todos} />
            </div>
            <div className="relative">
              <div className="fixed bottom-0 lg:right-80 right-2 pb-4">
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
