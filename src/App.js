import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Component/Home"
import Handle from "./Component/Handle"
import Group from "./Component/group/Group"
import logo from './logo.svg';
import './App.css';
import './Component/Home.css'
import './Component/User.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Twitter Bot
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/group" render={(props) => <Group {...props} 
              collectionName="groups"
              mainFieldName="name"
              scheduledFieldName="scheduled"
              title="Groups" />}
              />
        <Route exact path="/accounts" render={(props) => <Group {...props} 
              collectionName="accounts"
              mainFieldName="name"
              scheduledFieldName="scheduled"
              title="Accounts" />}
              />
        <Route exact path="/handle/:handle" component={Handle} />
      </Router>
    </div>
  );
}

export default App;
