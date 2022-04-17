import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import registerImg2 from "../.././images/homepage-banner-animated-2.gif";
import "../.././CSS/index.css";

function Register() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
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
              <div>
                <TextField
                  label={"First Name"}
                  id="margin-normal"
                  margin="normal"
                  style={{ width: "50%" }}
                />
                <TextField
                  label={"Last Name"}
                  id="margin-normal"
                  margin="normal"
                  style={{ width: "50%" }}
                />
              </div>
              <div>
                <TextField
                  label={"Email Id"}
                  id="margin-normal"
                  margin="normal"
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <TextField
                  label={"Password"}
                  id="margin-normal"
                  margin="normal"
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <TextField
                  label={"Confirm Password"}
                  id="margin-normal"
                  margin="normal"
                  style={{ width: "100%" }}
                />
              </div>
              <br />
              <div style={{ textAlign: "center", justifyContent: "center" }}>
                <button
                  className="button-36"
                  role="button"
                  onClick={() => navigate("/")}
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
