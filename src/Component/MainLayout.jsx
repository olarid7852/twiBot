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
                </div>
                <div className="container mt-2">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default MainLayout
