import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../.././CSS/index.css";
import TextField from "@mui/material/TextField";
import registerImg2 from "../.././images/homepage-banner-animated-2.gif";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
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
            <h1
              style={{
                color: "white",
                textAlign: "center",
                letterSpacing: "5px",
                fontFamily: "Sansita Swashed', cursive",
                paddingLeft:"-10rem",
              }}
            >
            Login
            </h1>
            <br />
          </span>
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
                <div className="loginAdjust">
                  <TextField
                    label={"Email Id"}
                    id="margin-normal"
                    className="margin-normal"
                    margin="normal"
                  />
                </div>
                <div className="loginAdjust">
                  <TextField
                    label={"Password"}
                    id="margin-normal"
                    className="margin-normal"
                    margin="normal"
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
                      onClick={() => navigate("/")}
                    >
                      Register here
                    </button>
                  </h6>
                </div>
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
