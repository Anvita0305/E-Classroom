import { set } from "mongoose";
import { React, useState } from "react";
import Sidebar from "./Sidebar";
// import Jwt from "jsonwebtoken";
// import { populate } from "../../../backend/models/user.model";

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


const MainPage = () => {
    const [assgID, setassgID] = useState('');
    const [studentID, setstudentID] = useState('');
    const [fileName, setfileName] = useState('');
    const [assignment, setassignment] = useState('');
    const fileUploadDate = currDate;
    const fileUploadTime = currTime;
    // console.log(assgID);

    async function uploadassg(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:8000/api/uploadassg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // parse the string to store it in required format
            body: JSON.stringify({
                assgID,
                studentID,
                fileName,
                assignment,
                fileUploadDate,
                fileUploadTime,
            }),
        })
        const data = await response.json()
        if (data) {
            console.log(data);
        }
        else {
            console.log("Error");
        }
        if (data.status === 'ok') {
            alert("File Uploaded successfully!");
        }
        else {
            alert("File Upload Failed!");
        }
    }
    return (
        <>
            <Sidebar />
            <h1>Welcome!</h1>
            <h3>Add Submission</h3>
            <form onSubmit={uploadassg}>
                <input
                    type="text"
                    value={assgID}
                    placeholder="Assignment Number"
                    onChange={(e) => { setassgID(e.target.value); }}>
                </input><br></br>
                <input
                    type="text"
                    value={studentID}
                    placeholder="Student MIS"
                    onChange={(e) => { setstudentID(e.target.value); }}>
                </input><br></br>
                <input
                    type="text"
                    value={fileName}
                    placeholder="File Name"
                    onChange={(e) => { setfileName(e.target.value); }}></input><br></br>
                <input
                    type="file"
                    name="assignment"
                    value={assignment}
                    onChange={(e) => { setassignment(e.target.value); }} /><br></br>
                <button
                    className="btn btn-primary"
                    value="uploadassg"
                    role="button">
                    Upload
                </button>
            </form>
            <h3>Post An Assignment</h3>
            <h3>View Submissions</h3>
        </>
    )
}

export default MainPage;