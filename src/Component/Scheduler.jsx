import React, { Component } from 'react'
import axios from 'axios';
import './User.css'


class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let data = this.state
        event.preventDefault()
        console.log('data')
        console.log(data)
        let $this = this
        axios.post(`http://127.0.0.1:5000/run-tasks`,
            {data}  )
            .then(res => {
                 console.log(res.data)
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className='container'>


                  <form action="">
                      <div className="form-group">
                      <label htmlFor='modal-select'>Enter Year</label>
                      <input type='text' name="year"  class="form-control" onChange={this.handleChange}></input>
                      </div>
                          <div className="form-group">
                      <label htmlFor='modal-select'>Enter Month</label>
                      <input type='text' name="month" class="form-control"  onChange={this.handleChange}></input>
                          </div>
                              <div className="form-group">
                      <label htmlFor='modal-select'>Enter Day</label>
                      <input type='text' name="day"   class="form-control" onChange={this.handleChange}></input>
                              </div>
                                  <div className="form-group">
                      <label htmlFor='modal-select'>Enter Hour</label>
                      <input type='text' name="hour"  class="form-control" onChange={this.handleChange}></input>
                                  </div>
                                      <div className="form-group">
                      <label htmlFor='modal-select'>Enter Minute</label>
                      <input type='text' name="minute"   class="form-control" onChange={this.handleChange}></input>
                                      </div>
                                          <div className="form-group">
                      <label htmlFor='modal-select'>Enter URL</label>
                      <input type='text' name="url"   class="form-control" onChange={this.handleChange}></input>
                                          </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>

                    </div>

                  </form>


                </div>

            </React.Fragment>
        )
    }
}

export default Scheduler
