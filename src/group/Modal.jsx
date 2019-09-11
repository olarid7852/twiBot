import React, { Component } from 'react'
// import './User.css'
import {addDocument} from '../utils/firestore'
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = async (event) => {
    let $this = this
    let docRef = await addDocument("groups", {
      name: this.state.value,
      scheduled: false,
      members: []
    })
    console.log("Document written with ID: ", docRef.id);
    window.$('#exampleModal').modal('hide')
    $this.props.onComplete()
  }
  render () {
    return (
      <React.Fragment>
        <div className="modal-body">
          <label htmlFor='modal-select'>Enter group name</label>
          <input type='textarea' id='modal-select' onChange={this.handleChange}></input>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Modal