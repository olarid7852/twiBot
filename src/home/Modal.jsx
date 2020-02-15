import React, { Component } from "react"
import {addDocument} from "../utils/firestore"
import {getDocumentList} from '../utils/firestore'
import DynamicSelect from "../Component/DynamicSelect";
// import './User.css'
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      'tag': '',
      selectedTag : '',
      tags: [],
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

  getTags = async () => {
    // let documents = await getDocumentListWithQuery("handles", this.groupFilter)[0]
     this.setState({tags: await getDocumentList("handles")})
     console.log('finsihed')
     console.log(this.state)
 }

 async componentDidMount() {
     await this.getTags()
 }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
    if (prevProps.submitted !== this.props.submitted) {
      this.handleSubmit()
    }
  }
  handleSelectChange = (selectedValue) =>{
    this.setState({
      selectedTag: selectedValue
    });
  }
  handleSubmit = async (event) => {
    console.log(3)
    let tagToAdd = this.state.tag.length ? this.state.tag : this.state.selectedTag
    if (tagToAdd !=="" && tagToAdd !== null && tagToAdd !== undefined){
      await addDocument("handles", {
        handle: this.state.handle,
        tag: tagToAdd,
        scraped: 0
      })
      window.$('#exampleModal').modal('hide')
      this.props.onComplete()
    }

  }
  render () {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor='modal-select'> Handle (Add twitter handle Name without @ sign)</label>
          <input className="form-control" type='text' onChange={this.handleChangeHandle}></input>
        </div>
        <div className="form-group">
          <label htmlFor='modal-select'>Group</label>
          <input className="form-control" type='text' onChange={this.handleChangeTag}></input>
        </div>
        <div className="form-group">
          <label htmlFor='modal-select'>Select Existing Group</label>
          <DynamicSelect arrayOfData={this.state.tags} onSelectChange={this.handleSelectChange} />
        </div>

        {/* <button onClick={this.handleSubmit}>Save</button> */}
      </React.Fragment>
    )
  }
}

export default Modal
