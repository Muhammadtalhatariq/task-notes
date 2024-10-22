import React, { useEffect, useState } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
 const element = document.documentElement
  console.log(element);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-[38px] absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
        src="darkmode.png"
        alt="darkmode"
      />
    </div>
  );
};

export default Darkmode;
