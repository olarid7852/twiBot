import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class MenuTab extends Component {
    static propTypes = {
        location: PropTypes.string
    }
    

    render() {
        return (
            <div>
                <nav className="nav nav-pills nav-justified nav-fill">            
                    <button className={`nav-item nav-link ${this.props.location.pathname === '/' ? 'active' : 'inactive'}`}><Link className="d-flex" to="/">Handle</Link></button>
                    <button className={`nav-item nav-link ${this.props.location.pathname === '/groups/' ? 'active' : 'inactive'}`}><Link className="d-flex" to="/groups/">Group</Link></button>
                    <button className={`nav-item nav-link ${this.props.location.pathname === '/accounts/' ? 'active' : 'inactive'}`}><Link className="d-flex" to="/accounts/">Accounts</Link></button>
                </nav>
            </div>
        )
    }
}

export default MenuTab
