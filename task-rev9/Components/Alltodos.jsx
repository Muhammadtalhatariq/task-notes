import React from "react";
import TodoItem from "@/Components/TodoItem";
const Alltodos = ({ todos }) => {
  {
    if (todos.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center flex-wrap gap-y-3">
          <img src="empty.png" alt="empty" />
          <p className=" font-bold">Empty...</p>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap gap-y-3 lg:w-[520px] w-[200px]">
            {/*Loop and Add TodoItem here */}

            {todos.map((todo) => (
              <div key={todo.id} className="w-full border-b border-blue-400">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
};
export default Alltodos;
