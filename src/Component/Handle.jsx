import React, { Component } from 'react'
import HandleModal from './HandleModal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Home.css'
import './User.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  render () {
    return (
      <React.Fragment>
        <div className='main-box'>

          <div className='header-text'>
            <h3>TWITTER BOT</h3>
          </div>
        
          <div className="container">

          <div className="list-group">
            {this.state.users.map((user) =>
              <div key={user}>
                <input type="checkbox" name="CheckBoxInputName" value={user} id={user} />
                <label className="list-group-item" htmlFor={user}>{user}</label>
              </div>
            )}
          </div>
          <div className='button'>
          <HandleModal />
          </div>
          
          </div>
        </div>
      </React.Fragment>
    )
  }

  componentWillMount(){
    let fs = window.firebase.firestore();
    // let followers = []
    let handle = this.props.match.params.handle
    console.log({handle})
    fs.collection("followers")
      .where("handle", "==", handle)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let followers = doc.data()['followers']
            console.log(doc.data())
            this.setState({users: followers})
        });
      });
  }
}

export default Home
