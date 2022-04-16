import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink as Link } from "react-router-dom";
import { cal } from "../pages/calender";



export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="./components/classes">
        Classes
      </a>

      <a className="menu-item" href="./components/calender">
        Calender
      </a>

      <a className="menu-item" href="./components/todo">
        To-do
      </a>
    </Menu>
  );
};
