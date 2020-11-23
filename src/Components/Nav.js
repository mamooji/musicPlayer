import React, { useState } from "react";
import { faMusic, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = (props) => {
  //props
  const { sideBarStatus, setSideBarStatus } = props;

  //state
  const [theme, setTheme] = useState("light");

  //function handler
  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <nav>
      <h1>Player</h1>
      <div>
        <button onClick={() => setSideBarStatus(!sideBarStatus)}>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
        <button onClick={themeHandler}>
          Theme
          <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
