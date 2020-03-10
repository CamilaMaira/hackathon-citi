import React, { useState } from 'react';
import firebase from '../Firebase';


function Dashboard(props) {
  const { classes } = props  

  //checkear si el usuario esta logeado
  if(!firebase.getCurrentUsername()) {
    //not logeado
    alert("Primero inicia sesión!")
    props.history.replace('/login')
    return null 
  }


  return (
    <main>
      <p> Hello {firebase.getCurrentUsername()} </p>

      <button
      type="submit"
      onClick={logout}
      className="">
        Cerrar Sesión
      </button>
    </main>

  )

  async function logout() {
    await firebase.logout()
    props.history.push('/')
  }




}

export default Dashboard;
