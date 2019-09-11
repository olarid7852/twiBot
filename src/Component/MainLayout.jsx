import React, { Component } from 'react'

class MainLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='main-box'>
                <div className='header-text'>
                    <h3>Title</h3>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default MainLayout
