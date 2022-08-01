import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./Components/Navbar/mainRegister";
import Login from "./Components/Navbar/mainLogin";
import "./CSS/style.css";
import SideBar from "./Components/Pages/Sidebar";
import MainPage from "./Components/Pages/MainPage";
// import Calender from "./Components/Pages/Calender"
import Todos from "./Components/Pages/Todo";
import Board from "./Components/Pages/Board";
import Welcome from "./Components/Pages/Welcome";

function App() {

return (
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/Register" element={<Register/>}/>
		<Route exact path="/Login" element={<Login/>}/>
		<Route exact path="/" element={<MainPage/>}/>
		<Route exact path="/todo" element={<Todos/>}/>
		<Route exact path="/Board" element={<Board/>}/>
		<Route exact path="/WelcomePage" element={<Welcome/>}/>
		{/* <Route exact path="/Calender" element={<Calender/>}/> */}

	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;
