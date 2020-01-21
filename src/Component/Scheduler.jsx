import React, { Component } from 'react'
import axios from 'axios';
import './User.css'


class Scheduler extends Component {
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
        let $this = this
        axios.get(`https://jsonplaceholder.typicode.com/users`)
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
