import React, { Component, useEffect } from 'react'
import Modal from './Modal'
import MyListItem from './MyListItem'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {deleteDocument, updateDocument, getDocumentList} from './utils/firestore'
import './Home.css'
import './User.css'
import myListItem from './MyListItem';

let collectionName = "handles"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handles: []
    }
    // this.updateHandles = this.updateHandles.bind(this);
    // this.handleDelete = this.handleDelete.bind(this)
    // this.handleUpdate = this.handleUpdate.bind(this)
  }
  render () {
    return (
      <React.Fragment>
        <div className='main-box'>
          <div className='header-text'>
            <h3>TWITTER BOT</h3>
          </div>
        
          <div className="container">

          <div className={"list-group"}>
            {this.state.handles.map((handle, index) =>
                <MyListItem document={handle} collectionName={collectionName} key={handle.id} updateHandles={this.updateHandles}/>
            )}
          </div>
          <div className='button'>
          <Modal onComplete={this.updateHandles} />
          </div>
          
          </div>
        </div>
      </React.Fragment>
    )
  }
  updateHandles = async () => {
    this.setState({handles: await getDocumentList(collectionName)})
  }

  componentWillMount(){
    this.updateHandles()
  }
}

export default Home
