import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';

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
                    <div className="nav-wrapper white" style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link to="/login" className="col s5 black-text" style={{ fontFamily: "monospace" }}>
                            Open Tickets
                            </Link>

                        {this.props.auth.isAuthenticated ?

                            <div style={{color: "gray"}}>
                                <b style={{paddingRight: "7px", color: "gray"}}>HI, </b> {user.name} 
                                <button className="waves-effect waves-teal btn-flat" onClick={this.onLogoutClick}>
                                    Logout
                                </button>

                            </div> :
                            <div>
                                <Link to="/register" className="col s5 black-text" style={{ fontFamily: "monospace", paddingRight: "7px" }}>Register</Link>
                                <Link to="/login" className="col s5 black-text" style={{ fontFamily: "monospace" }}>Login</Link>
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
