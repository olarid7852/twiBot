import genericList from "../../common/GenericList"
import genericListItem from "../../common/GenericListItem"
import AddNewScheduleModal from "./AddNewScheduleModal"
import React, {Component} from 'react';
import {getDocumentListWithQuery} from '../../utils/firestore'
// import MyListItem from "../Component/group/MyListItem";

const filterFunction = (props) => {
    return function(docRef){
        return docRef
    }
}

// function HomePage(props) {
//     return (
//         <div>
//             <HomePageList group={group}/>
//         </div>
//     )
// }
// import React, { Component } from 'react'

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            group: {},
            shouldUpdate: false
        }
        this.MyListItem = genericListItem({collectionName: "groupmessage", mainFieldName: "message", linkName: "/group/"})
        this.HomePageList = genericList(this.MyListItem, AddNewScheduleModal, {collectionName: "groupmessage", filterFunction: filterFunction},
                {a: 1})
    }
    groupFilter = (docRef) => {
        return docRef.where("name", "!=", "")
    }
    getGroupDetail = async () => {
        let documents = await getDocumentListWithQuery("groups", this.groupFilter)
        this.setState({shouldUpdate: true})
        window.setTimeout(() => {this.setState({shouldUpdate: false})}, 1000)
        this.setState({group: documents[0]})
    }
    componentDidMount = () => {
        this.getGroupDetail()
    }
    render() {
        return (
            <div>
                <this.HomePageList group={this.state.group} 
                        shouldUpdate={this.state.shouldUpdate}
                        dialogData={{group: this.state.group}}/>
            </div>
        )
    }
}

export default MainPage