import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';
import './style.css';

class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { user } = this.props.auth;
      //  console.log("Name " + user.name);

        console.log(this.props.auth.isAuthenticated)
        return (
            <div className="container">

                <nav className="z-depth-0">
                    <div className="nav-wrapper" style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link to="/login" className="col s5 white-text nav-link" style={{ fontFamily: "monospace" }}>
                            Open Tickets
                            </Link>

                        {this.props.auth.isAuthenticated ?

                            <div style={{color: "gray"}}>
                                <b style={{paddingRight: "7px", color: "white", textShadow: "1px 1px 2px black", fontSize: "15px"}}>Welcome, </b> <b><span className="user-name">{user.name} </span></b>
                                <button className="waves-effect waves-teal btn-flat" style={{ color: "White", textShadow: "1px 1px 2px black", fontSize: "15px"}} onClick={this.onLogoutClick}>
                                   <b>Logout</b> 
                                </button>

                            </div> :
                            <div>
                                <Link to="/register" className="col s5 white-text nav-link-2" style={{ fontFamily: "monospace", paddingRight: "7px" }}>Register</Link>
                                <Link to="/login" className="col s5 white-text nav-link-2" style={{ fontFamily: "monospace" }}>Login</Link>
                            </div>
                        }
                    </div>
                </nav>
            </div>

        );
    }
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
