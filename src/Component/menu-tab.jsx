import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './menu-tab.css';

class MenuTab extends Component {
    static propTypes = {
        location: PropTypes.string
    }
    

    render() {
        return (
            <div>
                <nav className="nav nav-pills nav-justified nav-fill bg-secondary">            
                    <Link className={`nav-item nav-link text-white ${this.props.location.pathname === '/' ? 'active' : 'inactive'}`} to="/">Handle</Link>
                    <Link className={`nav-item nav-link text-white ${this.props.location.pathname === '/groups/' ? 'active' : 'inactive'}`} to="/groups/">Group</Link>
                    <Link className={`nav-item nav-link text-white ${this.props.location.pathname === '/accounts/' ? 'active' : 'inactive'}`} to="/accounts/">Accounts</Link>
                </nav>
            </div>
        )
    }
}

export default MenuTab
