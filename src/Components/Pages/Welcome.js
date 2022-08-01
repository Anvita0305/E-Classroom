import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import "../../CSS/index.css";

export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div>
            <Sidebar />
            <div style={{ background: '#0D6EFD',textAlign:'center' }}>
                <br></br>
                <h1>Welcome to E-Classroom</h1>
                <br></br>
            </div>
            <div style={{textAlign:'center',color:'white',background:'black',cursor:'pointer'}} className="welcome-page">
                <h2 style={{ textDecoration: 'underline' }} onClick={()=>{window.location='http://localhost:9000/create'}}>To Schedule a meet/ join a meet Click here</h2><br></br><br></br>
                <h2 style={{ textDecoration: 'underline' }} onClick={()=>{navigate('/todo')}}>To Add an item to your to-do list Click here</h2><br></br><br></br>
                <h2 style={{ textDecoration: 'underline' }} onClick={()=>{navigate('/Board')}}>To practice on White-Board Click here</h2><br></br><br></br>
                <h2 style={{ textDecoration: 'underline' }} onClick={()=>{navigate('/Login')}}>To Logout Click here</h2><br></br><br></br>
            </div>
        </div>
    );
}