import React, { Component } from 'react'
// import './User.css'
import {addDocument} from '../utils/firestore'
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChangeUsername = (event) => {
    this.setState({username: event.target.value});
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = async (event) => {
    console.log('i')
    let docRef = await addDocument("accounts", {
      username: this.state.username,
      password: this.state.password
    })
    console.log("Document written with ID: ", docRef.id);
    window.$('#exampleModal').modal('hide')
    this.props.onComplete()
  }
  render () {
    return (
      <React.Fragment>
        <div className="alert alert-danger" role="alert">
                Username or Password is incorrect
        </div>
        <div className="form-group">
          <label htmlFor="Username">Username</label>
          <input type="email" className="form-control" placeholder="Enter Username" 
                onChange={this.handleChangeUsername}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" onChange={this.handleChangePassword} placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary text-right" onClick={this.handleSubmit}>Add</button>
      </React.Fragment>
    )
  }
}

export default Modal
