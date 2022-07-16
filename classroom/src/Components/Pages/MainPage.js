import React, { useEffect,useHistory } from "react";
import Sidebar from "./Sidebar";
// import Jwt from "jsonwebtoken";
// import { populate } from "../../../backend/models/user.model";

const MainPage=()=>{
    // const populateQuote=()=>{
    //    const req= fetch("http://localhost:8000/api/quote",{
    //     headers:
    //     {
    //         'x-access-token': localStorage.getItem("token"),
    //     }
    //    })
    //    const data=req.json();
    //    console.log(data);
    // }
    // const history=useHistory();
    // useEffect(()=>{
    //     const token=localStorage.getItem("token");
    //     if(token){
    //         const user=Jwt.decode(token);
    //         console.log(user);
    //         if(!user)
    //         {
    //             localStorage.removeItem("token");
    //             history.replace('./Login');
    //         }
    //         else
    //         {
    //             populateQuote();
    //         }
    //     }
    
    return(
        <>
            <Sidebar/>
            <h1>Welcome {}</h1>
       </>
    )
}

export default MainPage;