import React, { Component, Children } from 'react'
import GroupList from '../Component/group/Group'
import AddNewSchedule from '../Component/AddNewScheduleModal'
import {fs} from '../Component/utils/firestore'

class GroupPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            group: {}
        }
    }

    updateMessages = async () => {
        console.log(11)
        let document = {}
        let documents = await fs.collection("groups")
            .where("name", "==", this.props.match.params.groupName).get()
        documents.forEach(element => {
            document = {...element.data(), id: element.id}
        });
        console.log({aaa: document})
        this.setState({group: document})
    }
    componentWillMount = async () => {
        this.updateMessages()
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <GroupList
                collectionName="groupmessage"
              mainFieldName="message"
              scheduledFieldName="scheduled"
              linkPath="/accounts/"
              title="messages"
              >
                    <AddNewSchedule groupId={this.state.group.id} onFinished={this.updateMessages}/>
                </GroupList>
            </div>
        )
    }
}

export default GroupPage