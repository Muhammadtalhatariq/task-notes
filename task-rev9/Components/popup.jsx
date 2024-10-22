"use client";
import React, { useState } from "react";
import { useTodo } from "@/Contexts";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, complete: false });
    setTodo("");
  };
  return (
    <>
      {orderPopup && (
        <div className="fixed z-50 px-6">
          <div className="fixed bg-primary dark:bg-gray-800 w-[500px] h-[289px] top-[118px] left-[440px] py-3 rounded-2xl ">
            <div className="flex flex-col dark:text-white text-black px-2">
              <h1 className="text-center font-bold pb-4">NEW NOTE</h1>
              
              <form onSubmit={add}>
                <input
                  type="text"
                  placeholder="input your note..."
                  className=" w-full border border-blue-400 rounded-[5px] px-3 outline-none duration-150 text-black py-1.5"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
                <div className="flex justify-between pt-20">
                  <button
                    onClick={() => setOrderPopup(false)}
                    type="text"
                    className=" px-3 py-1 rounded-[5px] border border-blue-600 text-blue-600 "
                  >
                    CANCLE
                  </button>
                  <button
                    type="submit"
                    className="rounded-[5px] px-3 py-1 bg-blue-600 text-white "
                  >
                   APPLY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
