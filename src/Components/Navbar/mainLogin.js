import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../.././CSS/index.css";
// import input from "@mui/material/input";
import registerImg2 from "../.././images/homepage-banner-animated-2.gif";
import { useNavigate } from "react-router-dom";
import { style } from "@mui/system";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch("http://localhost:8000/api/login", {
      method: 'POST',
      headers:
      {
        "Content-Type": 'application/json',
      },
      // parse the string to store it in required format
      body: JSON.stringify(
        {
          email,
          password
        }
      ),
    })
    const data = await response.json()
    // console.log(data);
    if(data.status==='ok'){
      alert("User logged in successfully!");
      navigate("/WelcomePage");
    }
    else if(data.status==='wrongcreds'){
      alert("Invalid Credentials!");
      navigate("/Login");
    }
    else if(data.status==='plsregis'){
      alert("Please Register before Logging!");
      navigate("/Register");
    }
  }

  return (
    <>
      <div className="mainLogin">
        <div className="main">
          <span>
            {/* <h1
              style={{
                color: "white",
                textAlign: "left",
                letterSpacing: "5px",
                fontFamily: "Sansita Swashed', cursive",
              }}
            >
              OnlineEdu
            </h1> */}
            <br></br><br></br>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                letterSpacing: "5px",
                fontFamily: "Sansita Swashed', cursive",
                paddingLeft: "-10rem",
              }}
            >
              Login
            </h1>
            <br />
          </span>
          <br></br><br></br>
          <div
            className="container2"
            style={{ backgroundColor: "white", borderRadius: "1rem" }}
          >
            <br />
            <div>
              <img
                src={registerImg2}
                style={{ height: "90%", width: "90%" }}
              ></img>
            </div>
            <div>
              <div className="register">
                <form onSubmit={loginUser}>
                <br/>
                  <br/>
                  <div className="loginAdjust">
                    <input
                      label="Email Id"
                      id="margin-normal"
                      className="margin-normal"
                      margin="normal"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      style={{ width: "50%",height:"3rem" }}
                    />
                  </div>
                  <br/>
                  <div className="loginAdjust">
                    <input
                      label={"Password"}
                      id="margin-normal"
                      className="margin-normal"
                      margin="normal"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      style={{ width: "50%",height:"3rem" }}
                    />
                  </div>
                  <br />
                  <div
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      // paddingLeft: "10rem",
                    }}
                  >
                    <button
                      className="button-36"
                      role="button"
                      style={{ textAlign: "center", justifyContent: "center" }}
                      // onClick={() => navigate("/MainPage")}
                    >
                      Login
                    </button>
                  </div>
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <h6>
                      Don't have an Account?
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          color: "#455eb5",
                          fontWeight: "700",
                          letterSpacing: "1px",
                        }}
                        onClick={() => navigate("/Register")}
                        value="login"
                      >
                        Register here
                      </button>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Login;






// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setpassword] = useState("");

//   async function loginUser(event)
//   {
//     event.preventDefault()
//     const response= await fetch("http://localhost:8000/api/login",{
//         method: 'POST',
//         headers:
//         {
//             "Content-Type":'application/json',
//         },
//         // parse the string to store it in required format
//         body:JSON.stringify(
//             {
//                 email,
//                 password
//             }
//         ) ,
//     })
//     const data=await response.json()
//     // console.log(data);
//   }

//   return (
//     <>
//       <h1>Login</h1>
//       <form onSubmit={loginUser}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         ></input>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => {
//             setpassword(e.target.value);
//           }}
//         ></input>
//         <input type="submit" value="login"></input>
//       </form>
//     </>
//   );
// };

// export default Login;
