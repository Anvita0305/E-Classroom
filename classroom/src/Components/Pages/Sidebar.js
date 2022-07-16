import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink as Link } from "react-router-dom";
import { cal } from "./Calender";



export default props => {
  return (
    <>
    {/* // Pass on our props */}
    <Menu {...props}>
      
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="./classes">
        Classes
      </a>

      <a className="menu-item" href="./calender">
        Calender
      </a>

      <a className="menu-item" href="./todo">
        To-do
      </a>
    </Menu>
    {/* <h1>Main Page</h1> */}
    </>
  );
};