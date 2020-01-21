import React, {Component} from 'react'
import Scheduler from '../Component/Scheduler'

class SchedulerPage extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        console.log(this.state)
        return (
            <div>

                <Scheduler/>

            </div>
        )
    }
}

export default SchedulerPage