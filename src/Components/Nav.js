import React, { useState, useEffect } from "react";
import { faMusic, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = (props) => {
  //props
  const { sideBarStatus, setSideBarStatus } = props;

  //state
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      setTheme("dark");
      return document.body.classList.add("dark");
    }
  });

  //function handler
  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark");
    }
  };
  return (
    <nav>
      <h1>Player</h1>
      <div>
        <button onClick={() => setSideBarStatus(!sideBarStatus)}>
          Library <FontAwesomeIcon icon={faMusic} />
        </button>
        <button onClick={themeHandler}>
          Theme <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
