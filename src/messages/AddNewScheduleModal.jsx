import React, { Component } from 'react'
// import './User.css'
import {addDocument} from '../utils/firestore'
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        statusLink: "",
        message: "",
        time: "",
        title: ""
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.submitted !== this.props.submitted) {
      this.handleSubmit()
    }
  }

  handleTimeChanged = (ev) => {
      this.setState({time: ev.target.value})
  }
  handleDateChanged = (ev) => {
    this.setState({date: ev.target.value})
  }
  handleLinkChanged = (ev) => {
    this.setState({link: ev.target.value})
  }
  handleTitleChanged = (ev) => {
    this.setState({title: ev.target.value})
  }
  handleMessageChanged = (ev) => {
    this.setState({message: ev.target.value})
  }

  handleSubmit = async () => {
      let data = {
          tag: this.props.additionalProps.tagName,
          link: this.state.link,
          message: this.state.message,
          datetime: new Date(this.state.date + "T" + this.state.time),
          title: this.state.title
      }
      console.log(data)
      await addDocument("groupmessage", data)
      this.props.onComplete()
      window.$('#exampleModal').modal('hide')
  }
  componentWillMount(){
    console.log({a:1})
    console.log(this.props.groupId)
  }
  render () {
    return (
      <React.Fragment>
              <div className="container-fluid">
                      <div className="container-fluid">
          <h3>Reply to a status</h3>
          <form>
            <div className="form-group">
              <label htmlFor="usr">Title:</label>
              <input type="text" className="form-control" onChange={this.handleTitleChanged}/>
            </div>
            <div className="form-group">
              <label htmlFor="usr">Link:</label>
              <input type="text" className="form-control" onChange={this.handleLinkChanged}/>
            </div>
            <br/>
            {/* <div className="alert alert-danger">
              <strong>Name not found!</strong>The username cannot be found.
            </div> */}
            <div className="form-group">
                <label htmlFor="comment">Message:</label>
                <textarea className="form-control" rows="5" id="comment" onChange={this.handleMessageChanged}></textarea>
              </div>
              {/* <div className="alert alert-danger">
                    <strong>Name not found!</strong>The username cannot be found.
                  </div> */}
                    <div className="form-group">
                        <label htmlFor="usr">Time:</label>
                        <div className='input-group date' id='datetimepicker3'>
                        <input type='date' className="form-control" onChange={this.handleDateChanged}/>
                         <input type='time' className="form-control" onChange={this.handleTimeChanged}/>
                        </div>
                    </div>
                    <br/>
                    <div className="text-right">
                        <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>
                            SUBMIT
                           </button>
                        </div>
          </form>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Modal
