import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./Components/Navbar/mainRegister";
import Login from "./Components/Navbar/mainLogin";

function App() {
	
return (
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Register/>}/>
		<Route exact path="/Login" element={<Login/>}/>
	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;

