import React, { useState } from "react";
import {Navigate} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect] = useState(false);

  const login = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login" , {
      method: "POST",
      body: JSON.stringify({username,password}),
      headers: {"Content-Type":"application/json"},
      credentials: "include",
    })
    if(response.ok){
      setRedirect(true);
      console.log("Login successfull", response);
    }else{
      alert("Wrong credientials")
    }
  }
  if(redirect){
    return <Navigate to={'/'}/>
  }
  return (
    <form onSubmit={login} className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
