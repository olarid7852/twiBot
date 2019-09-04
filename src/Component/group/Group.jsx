import React, { Component } from 'react'
import Modal from './Modal'
import MyListItem from './MyListItem'
import {getDocumentList} from '../utils/firestore'

// let collectionName = "groups"
// let mainFieldName = "name"
// let scheduledFieldName = "scheduled"
// let title = "Groups"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: []
    }
  }
  render () {
    let collectionName = this.props.collectionName
    let mainFieldName = this.props.mainFieldName
    let scheduledFieldName = this.props.scheduledFieldName
    let title = this.props.title
    return (
      <React.Fragment>
        <div className='main-box'>
          <div className='header-text'>
            <h3>{title}</h3>
          </div>
        
          <div className="container">

          <div className={"list-group"}>
            {this.state.documents.map((document, index) =>
                <MyListItem document={document} mainFieldName={mainFieldName} scheduledFieldName={scheduledFieldName} collectionName={collectionName} updateHandles={this.updateHandles}/>
            )}
          </div>
          {/* <div className='button'>
          <Modal onComplete={this.updateHandles}/>
          </div> */}
          <div>{this.props.children}</div>
          
          </div>
        </div>
      </React.Fragment>
    )
  }
  updateHandles = async () => {
    this.setState({documents: await getDocumentList(this.props.collectionName)})
  }

  componentWillMount(){
    this.updateHandles()
  }
}

export default Home
