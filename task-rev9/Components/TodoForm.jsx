"use client";
import React, { useState } from "react";
import Darkmode from "./Darkmode";

const TodoForm = () => {


  return (
    <>
      <div className="flex gap-4">
        <form>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search note..."
              className="w-[595px] h-[38px] border border-blue-400 rounded-[5px] px-4 py-2 outline-none duration-150 text-black"
            />
            <div className="absolute right-3 top-2">
              <img src="search.png" alt="icon" />
            </div>
          </div>
        </form>

        <select
          className="bg-secondary h-[38px} rounded-[5px] outline-none"
          name="SELACT"
          id=""
        >
          <option value="all">ALL</option>
          <option value="all">DATE</option>
          <option value="all">NAME</option>
        </select>

        <div className="relative">
          <div className="w-10 absolute">
            <Darkmode />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
