import React, { Component } from 'react'
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

  handleSubmit(event) {
    console.log(this.state.value);
    let fs = window.firebase.firestore();
    let $this = this
    fs.collection("handles").add({
      handle: this.state.value,
      scraped: false
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      window.$('#exampleModal').modal('hide')
      $this.props.onComplete()
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }
  render () {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='userSection'>
            <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Add
            </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modalHeader modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Enter group name</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">
                    
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor='modal-select'>Enter group name</label>
                <input type='textarea' id='modal-select' onChange={this.handleChange}></input>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Modal
