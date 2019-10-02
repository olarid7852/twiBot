import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { deleteDocument } from '../utils/firestore';

function genericListItem(pageData){
    return class MyListItem extends Component {
        constructor(props) {
            super(props)
            this.state = {
            }
        }
        handleDelete = async () => {
          await deleteDocument(pageData.collectionName, this.props.document.id)
          this.props.updateHandles()
        }
        handleUpdate () {}
    
        render() {
            let handle = this.props.document
            let mainFieldName = pageData.mainFieldName
            let scheduledFieldName = pageData.scheduledFieldName
            let linkName = pageData.linkName
            return (
                    <li className={"list-group-item  list-group-item-action  d-flex handle"} key={handle.id}>
                        <Link to={linkName + handle[mainFieldName]} className="my-flex-auto d-flex flex-row">
                          <span className="my-flex-auto"> {handle[mainFieldName]} </span>
                          <span className="badge">
                            <i className={`material-icons ${handle[scheduledFieldName] ? "text-success": "text-warning"}`}>
                            {handle[scheduledFieldName] ? "check_circle" : "schedule"}
                          </i>
                          </span>
                         </Link>
                          <button className="btn">
                            <i className="material-icons" onClick={this.handleDelete}> delete </i>
                          </button>
                          <button className="btn">
                            <i className="material-icons" onClick={this.handleUpdate}> edit </i>
                           </button>
                      </li>
            )
        }
    }
    
}

export default genericListItem