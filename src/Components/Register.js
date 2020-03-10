import React, { useState } from 'react';
import firebase from '../Firebase';
import { withRouter, Link } from 'react-router-dom'



function Register(props) {
  const { classes } = props 

  const [ name, setName ] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  return (
    <main>

        <label>Ingresa tu Nombre</label>
        <input 
        id="name"
        value={name} 
        onChange={e => setName(e.target.value)}
        />

      <label>Ingresa tu Email</label>
       <input 
        id="email"
        value={email} 
        onChange={e => setEmail(e.target.value)}
        />

        <label>Ingresa tu clave</label>
        <input 
        id="password"
        type="password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
        />

        <Link to="/dashboard">
        <button
        type="submit"
        onClick={onRegister}
        className="">
          OK
        </button>
        </Link>


    </main>
  )

  async function onRegister () {
    try {
      await firebase.register(name, email, password)
      props.history.replace('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }


}

export default withRouter(Register);
