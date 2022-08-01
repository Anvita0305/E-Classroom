import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import input from "@mui/material/input";
import registerImg2 from "../.././images/homepage-banner-animated-2.gif";
import "../.././CSS/index.css";

const Register=()=> {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");


  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    const response =await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // parse the string to store it in required format
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmpassword,
      }),
    })
    const data = await response.json()
    console.log(data);
    if(data.status==='ok'){
      alert("User registered successfully!");
      navigate("/Login");
    }
    else if(data.status==='dupemail'){
      alert("Email already exists!");
      navigate("/Register");
    }
    else if(data.status==='invmail'){
      alert("Invalid Email Format!");
      navigate("/Register");
    }
    else if(data.status==='passmatch'){
      alert("Passwords not matching!");
      navigate("/Register");
    }
    else if(data.status==='shortpass'){
      alert("Password too Short! Must be between 8-20 characters");
      navigate("/Register");
    }
    else if(data.status==='longpass'){
      alert("Password too Long! Must be between 8-20 characters");
      navigate("/Register");
    }
    else if(data.status==='longpass'){
      alert("Password too Long! Must be between 8-20 characters");
      navigate("/Register"); 
    }
    else if(data.status==='invpass'){
      alert("Password should contain only alphanumeric characters!");
      navigate("/Register");
    }
    else if(data.status==='invfname'){
      alert("Username should contain only alphanumeric characters!!");
      navigate("/Register");
    }
  }

  return (
    <>
      <div className="main">
      <br></br><br></br>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            letterSpacing: "5px",
            fontFamily: "Sansita Swashed', cursive",
          }}
        >
          Register
        </h1>
        <br></br><br></br>
        <div
          className="container2"
          style={{ backgroundColor: "white", borderRadius: "1rem" }}
        >
          <br />
          <div>
            <img
              src={registerImg2}
              style={{ height: "100%", width: "100%", paddingLeft: "1rem" }}
            ></img>
          </div>
          <div style={{ paddingLeft: "-50rem" }}>
            <div className="register">
              <form onSubmit={registerUser}>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={firstName}
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                    style={{ width: "50%",height:"3rem",marginBottom:"1rem" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={lastName}
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                    style={{ width: "50%",height:"3rem" }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    style={{ width: "100%",height:"3rem",marginBottom:"1rem" }}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    style={{ width: "100%",height:"3rem",marginBottom:"1rem" }}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => {
                      setconfirmpassword(e.target.value);
                    }}
                    style={{ width: "100%",height:"3rem",marginBottom:"1rem" }}
                  />
                </div>
                <br />
                <div style={{ textAlign: "center", justifyContent: "center" }}>
                  <button
                    className="button-36"
                    value="register"
                    role="button"
                    // onClick={() => { navigate("/Login"); alert("Registered Successfully"); }}
                    style={{ textAlign: "center", justifyContent: "center" }}
                  >
                    Register
                  </button>
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                  <h6>
                    Already have an Account?
                    <button
                      className="btn-login"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        color: "#455eb5",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                      onClick={() => navigate("/Login")}
                    >
                      Login here
                    </button>
                  </h6>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Register;
