import React, { Component } from 'react'
import {getDocumentList} from '../utils/firestore'
import { getDocumentListWithQuery } from '../utils/firestore';

// let collectionName = "groups"
// let mainFieldName = "name"
// let scheduledFieldName = "scheduled"
// let title = "Groups"
function genericList(ListComponent, AddComponent, pageData, addionalAddDialogProp) {
    return class Home extends Component {
        constructor(props) {
            super(props);
            this.state = {
                documents: []
            }
        }
        render () {
            return (
            <div>
                <div className={"list-group"}>
                    {this.state.documents.map((document, index) =>
                        <ListComponent document={document} updateHandles={this.updateHandles}/>
                    )}
                </div>
                <div className='button'>
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
                <AddComponent onComplete={this.onComplete} additionalProps={this.props.dialogData}/>
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

                </div>
            </div>
            )
        }

        closeModal = () => {
            console.log("closed")
        }
        onComplete = async () =>{
            await this.updateHandles()
            this.closeModal()
        }

        updateHandles = async () => {
            let documents = []
            if (pageData.filterFunction){
                let computedFilterFunction = pageData.filterFunction(this.props)
                documents = await getDocumentListWithQuery(pageData.collectionName, computedFilterFunction)
            }
            else{
                documents = await getDocumentList(pageData.collectionName)
            }
            this.setState({documents: documents})
            if(documents.length > 0){
                this.setState({group: documents[0]})
            }
            return true
        }

        componentWillUpdate(){
            if(this.props.shouldUpdate){
              this.updateHandles()
            }
        }
        componentDidMount(){
          this.updateHandles()
        }
    }
}

export default genericList