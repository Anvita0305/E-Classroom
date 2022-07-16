import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  async function loginUser(event)
  {
    event.preventDefault()
    const response= await fetch("http://localhost:8000/api/login",{
        method: 'POST',
        headers:
        {
            "Content-Type":'application/json',
        },
        // parse the string to store it in required format
        body:JSON.stringify(
            {
                email,
                password
            }
        ) ,
    })
    const data=await response.json()
    // console.log(data);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <input type="submit" value="login"></input>
      </form>
    </>
  );
};

export default Login;
