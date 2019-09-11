import React, { Component } from 'react'
import Modal from '../Component/Modal'
import Group from "../Component/group/Group"
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Group
                    collectionName="handles"
                    mainFieldName="handle"
                    scheduledFieldName="scraped"
                    linkName="/handle/"
                    title="Handle">
                    <Modal />
                </Group>
            </div>
        )
    }
}

export default HomePage