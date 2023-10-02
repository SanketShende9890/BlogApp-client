import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Registration = async (event) =>{
    event.preventDefault();
    const response = await fetch('http://localhost:4000/register',{
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers:{"Content-Type": "application/json"},
    })
    if(response.status===200){
      alert("Registration success!");
    }else{
      alert("Registration failed");
    }
  }
  return (
    <form className="register" onSubmit={Registration}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
