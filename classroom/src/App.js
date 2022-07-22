// import React from "react";
// import { BrowserRouter, Route,Routes } from "react-router-dom";
// import "./App.css";
// import Login from "./Components/Login";
// import Register from "./Components/Register";

// function App() {
//   return (
//     <>
//       <Register></Register>
//       <Login></Login>
//       {/* <Routes>
//         <>
//         <Route path="/" element={<Register/>} />
//         <Route path="/login" element={<Login />} />
//         </>
//       </Routes> */}
     
//     </>
//   );
// }

// export default App;

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./Components/Navbar/mainRegister";
import Login from "./Components/Navbar/mainLogin";
import "./CSS/style.css";
import SideBar from "./Components/Pages/Sidebar";
import MainPage from "./Components/Pages/MainPage";
import CalenderPage from "./Components/Pages/Calender"
import Todos from "./Components/Pages/Todo";
import Board from "./Components/Pages/Board";

function App() {

return (
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Register/>}/>
		<Route exact path="/Login" element={<Login/>}/>
		<Route exact path="/MainPage" element={<MainPage/>}/>
		<Route exact path="/todo" element={<Todos/>}/>
		<Route exact path="/Board" element={<Board/>}/>

	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;
