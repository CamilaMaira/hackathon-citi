import React, { useState, useEffect } from 'react';
import firebase from './Firebase';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/HomePage';


function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState (false);

  useEffect(()=> {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  
  ) : <div id="loader"></div>
}

export default App;
