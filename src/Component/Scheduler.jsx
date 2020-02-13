import React, {Component} from 'react'
import axios from 'axios';
import './User.css'
import {getDocumentList} from './utils/firestore'
import MyListItem from "./MyListItem";
import DynamicSelect from "./DynamicSelect";
import {getDocumentListWithQuery} from "../utils/firestore";


class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            tags: [],
            tag: ''
        }
    }
    groupFilter = (docRef) => {
        return docRef.where("handle", "==", "")
    }
    getTags = async () => {
       // let documents = await getDocumentListWithQuery("handles", this.groupFilter)[0]
        this.setState({tags: await getDocumentList("handles")})
        console.log('finsihed')
        console.log(this.state)
    }
    updateTags = async () => {

        this.setState({tags: await getDocumentList('tags')})
    }

    async componentDidMount() {
        await this.getTags()
    }
  handleSelectChange = (selectedValue) =>{
    this.setState({
      tag: selectedValue
    });
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
        let {tags, ...data} = this.state
        event.preventDefault()
        console.log(data)
        console.log(event)
        let $this = this
        axios.post(`http://localhost:3001/run-tasks`,
            {data})
            .then(res => {
                console.log(res.data)
            })
    }


    render() {
        return (
            <React.Fragment>
                <div className='container'>


                    <form action="">
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <label htmlFor='modal-select'>Enter Year</label>
                                <input type='text' name="year" className="form-control "
                                       onChange={this.handleChange}></input>
                            </div>
                            <div className="col-auto">
                                <label htmlFor='modal-select'>Enter Month</label>
                                <input type='text' name="month" className="form-control"
                                       onChange={this.handleChange}></input>
                            </div>

                            <div className="col-auto">
                                <label htmlFor='modal-select'>Enter Day</label>
                                <input type='text' name="day" className="form-control"
                                       onChange={this.handleChange}></input>
                            </div>
                        </div>

                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <label htmlFor='modal-select'>Enter Hour</label>
                                <input type='text' name="hour" className="form-control"
                                       onChange={this.handleChange}></input>
                            </div>
                            <div className="col-auto">
                                <label htmlFor='modal-select'>Enter Minute</label>
                                <input type='text' name="minute" className="form-control"
                                       onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor='modal-select'>Enter URL</label>
                            <input type='text' name="url" className="form-control" onChange={this.handleChange}></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor='modal-select'>Select Tag</label>
             <DynamicSelect arrayOfData={this.state.tags} onSelectChange={this.handleSelectChange} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Schedule
                            </button>

                        </div>

                    </form>


                </div>

            </React.Fragment>
        )
    }
}

export default Scheduler
