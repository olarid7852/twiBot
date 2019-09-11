import React, { Component } from 'react'
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
      <div className={"list-group"}>
        {this.state.documents.map((document, index) =>
          <MyListItem linkName={this.props.linkName} document={document} mainFieldName={mainFieldName} scheduledFieldName={scheduledFieldName} collectionName={collectionName} updateHandles={this.updateHandles}/>
        )}
      </div>
    )
  }

  onComplete = () =>{
    this.updateHandles()
  }
  updateHandles = async () => {
    let documents = await getDocumentList(this.props.collectionName)
    this.setState({documents: documents})
    if(documents.length > 0){
      this.setState({group: documents[0]})
    }
  }

  componentWillMount(){
    this.updateHandles()
  }
}

export default Home