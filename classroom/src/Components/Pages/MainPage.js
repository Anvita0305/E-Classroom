import React, { useEffect,useHistory } from "react";
import Sidebar from "./Sidebar";
// import Jwt from "jsonwebtoken";
// import { populate } from "../../../backend/models/user.model";

const MainPage=()=>{
    return(
        <>
            <Sidebar/>
            <h1>Welcome!</h1>
            <h3>Add Submission</h3>
            <h3>Post An Assignment</h3>
            <h3>View Submissions</h3>
       </>
    )
}

export default MainPage;