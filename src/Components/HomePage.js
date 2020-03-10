import React from 'react';
import { Link, withRouter } from 'react-router-dom';


function HomePage(props) {
  const { classes } = props

  return (
    <main>
      <p>Hola</p>

      <Link to="/dashboard">
      <button
        type="submit"
        className="">
          OJO OJO
      </button>
      </Link>

      <Link to="/register">
      <button
        type="submit"
        component={Link}
        to="/register"
        className="">
          Registrate
      </button>
      </Link>


    </main>
  )




}

export default withRouter(HomePage);
