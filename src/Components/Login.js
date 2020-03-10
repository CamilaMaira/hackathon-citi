import React, { useState } from 'react';
import firebase from '../Firebase';

function Login (props) {
  const { classes } = props 

    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");


    return (
      <main>
        <label>Ingresa tu correo</label>
        <input 
        id="email"
        value={email} 
        onChange={e => setEmail(e.target.value)}
        />

        <label>Ingresa tu contraseña</label>
        <input 
        id="password"
        type="password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
        />

        <button
        type="submit"
        className=""
        onClick={login}>
        Inicia Sesión
        </button>
    
      </main>
    )

    async function login() {
      try {
        await firebase.login(email, password)
        props.history.replace('/dashboard')
      } catch (error) {
        console.log("ERRRROR")
      }
}}

export default Login; 
