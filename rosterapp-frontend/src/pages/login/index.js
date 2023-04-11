"use client"
import React, { useState } from "react";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  formContainer :{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  
  form :{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  
  input : {
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  },
  
  button:{
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  }
  
}));


function login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };
  const classes = useStyles();
  return (
    <div className = {classes.formContainer}>

    <form onSubmit={handleSubmit} className = {classes.form}>
      <div>
        <label htmlFor="username">Username:</label>
        <input className = {classes.input}
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className = {classes.input}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <button type="submit" className = {classes.button}>Login</button>
    </form>
          </div>
  );
}


export default login