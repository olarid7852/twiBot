import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import GroupPage from "./pages/GroupPage"
import HomePage from "./home/HomePage"
import GroupPage from "./group/MainPage"
import GroupDetail from "./group/groutItem/MainPage"
import AccountPage from "./account/MainPage"
import MainLayout from "./Component/MainLayout"
import HandlePage from "./handle/Handle"
import './App.css';
import './Component/Home.css'
import './Component/User.css'
function App() {
  return (
    <div className="App">
      <Router>
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
      <nav className="nav nav-pills nav-justified nav-fill">
        <button className="nav-item nav-link active"><Link className="d-flex" to="/">Handle</Link></button>
        <button className="nav-item nav-link"><Link className="d-flex" to="/groups/">Group</Link></button>
        <button className="nav-item nav-link"><Link className="d-flex" to="/accounts/">Accounts</Link></button>
        <button className="nav-item nav-link"><Link className="d-flex">Link</Link></button>
      </nav>
      <MainLayout>
      {/* <Router> */}
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/group" render={(props) => <Group {...props} 
              collectionName="groups"
              mainFieldName="name"
              scheduledFieldName="scheduled"
              linkName="/group/"
              title="Groups"><AddGroupModal/></Group>}
              />
        <Route exact path="/accounts" render={(props) => <Group {...props} 
              collectionName="accounts"
              mainFieldName="username"
              scheduledFieldName="scheduled"
              linkPath="/accounts/"
              title="Accounts" ><AddAccountModal/></Group>}
              /> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/groups/" component={GroupPage} />
        <Route exact path="/accounts/" component={AccountPage} />
        <Route exact path="/group/:groupName" component={GroupDetail} />
        <Route exact path="/handle/:handle" component={HandlePage} />
      </MainLayout>
      </Router>
    </div>
  );
}

export default App;
