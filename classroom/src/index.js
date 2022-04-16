// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
// <React.StrictMode>
// 	<App />
// </React.StrictMode>,
// document.getElementById('root')
// );



import React from "react";
import ReactDOM from "react-dom";

import "./components/Sidebar/styles.css";
import SideBar from "./components/Sidebar/sidebar";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
