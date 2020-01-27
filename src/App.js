import React, { Component } from 'react'
import { withRouter } from "react-router"
import { BrowserRouter as Router, Route } from "react-router-dom";
// import GroupPage from "./pages/GroupPage"
import HomePage from "./home/HomePage"
import Messages from "./messages/MainPage"
import GroupDetail from "./group/groutItem/MainPage"
import AccountPage from "./account/MainPage"
import MainLayout from "./Component/MainLayout"
import HandlePage from "./handle/Handle"
import MenuTab from "./Component/menu-tab"
import './App.css';
import './Component/Home.css'
import './Component/User.css'
import PropTypes from 'prop-types'
import SchedulerPage from "./pages/SchedulerPage";

const NavigationBar = withRouter(MenuTab);

class App extends Component {
  static propTypes = {

  }
  staticContext = {};

  render() {

      
      return (
        <div className="App">
          <Router context={this.staticContext}>
          
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
          <NavigationBar/>

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
            <Route exact path="/groups/" component={GroupDetail} />
            <Route exact path="/accounts/" component={AccountPage} />
            <Route exact path="/scheduler/" component={SchedulerPage} />
            <Route exact path="/messages/:tagName" component={Messages} />
            <Route exact path="/handle/:handle" component={HandlePage} />
          </MainLayout>
          </Router>
        </div>
      );
    }
    
}

export default App;
