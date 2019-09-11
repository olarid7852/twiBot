import React, { Component } from "react"
import {addDocument} from "../utils/firestore"
// import './User.css'
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
    await addDocument("handles", {
      handle: this.state.value,
      scraped: false
    })
    window.$('#exampleModal').modal('hide')
    this.props.onComplete()
  }
  render () {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor='modal-select'>Enter Handle</label>
          <input className="form-control" type='text' onChange={this.handleChange}></input>
        </div>
        <button onClick={this.handleSubmit}>Save</button>
      </React.Fragment>
    )
  }
}

export default Modal
