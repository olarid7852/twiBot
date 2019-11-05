import React, { Component } from "react"
import {addDocument} from "../utils/firestore"
// import './User.css'
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      'tag': ''
    };
    this.handleChangeHandle = this.handleChangeHandle.bind(this);
    this.handleChangeTag = this.handleChangeTag.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeHandle(event) {
    this.setState({handle: event.target.value});
  }

  handleChangeTag(event) {
    this.setState({tag: event.target.value});
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
    if (prevProps.submitted !== this.props.submitted) {
      this.handleSubmit()
    }
  }

  handleSubmit = async (event) => {
    console.log(3)
    await addDocument("handles", {
      handle: this.state.handle,
      tag: this.state.tag,
      scraped: 0
    })
    window.$('#exampleModal').modal('hide')
    this.props.onComplete()
  }
  render () {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor='modal-select'>Handle</label>
          <input className="form-control" type='text' onChange={this.handleChangeHandle}></input>
        </div>
        <div className="form-group">
          <label htmlFor='modal-select'>Tag</label>
          <input className="form-control" type='text' onChange={this.handleChangeTag}></input>
        </div>
        {/* <button onClick={this.handleSubmit}>Save</button> */}
      </React.Fragment>
    )
  }
}

export default Modal
