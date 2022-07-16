import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  async function registerUser(event)
  {
    event.preventDefault()
    const response= await fetch("http://localhost:8000/api/register",{
        method: 'POST',
        headers:
        {
            "Content-Type":'application/json',
        },
        // parse the string to store it in required format
        body:JSON.stringify(
            {
                name,
                email,
                password
            }
        ) ,
    })
    const data=await response.json()
    console.log(data);
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
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
        <input type="submit" value="register"></input>
      </form>
    </>
  );
};

export default Register;
