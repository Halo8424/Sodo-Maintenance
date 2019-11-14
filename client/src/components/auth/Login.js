import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import './style.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
        };
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) this.props.history.push("/dashboard");
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) this.props.history.push("/dashboard");

        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        // console.log(userData);
        this.props.loginUser(userData);
        this.setState({isLoggedIn:true})
      
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container wrapper">
                <div className="row" style={{ marginTop: "4rem" }}>
                    <div className="col s8">
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Login:</b> Sodo Maintenance
                            </h4>
                            <p className="register">
                                Don't have an account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.email} error={errors.email} name="email" type="email" className={classnames("", { invalid: errors.email || errors.emailnotfound })} />
                                <label htmlFor="email" className="white-text">Email</label>
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.password} error={errors.password} name="password" type="password" className={classnames("", { invalid: errors.password || errors.passwordincorrect })} />
                                <label htmlFor="password" className="white-text">Password</label>
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button className="btn btn-large waves-effect waves-light hoverable white accent-3" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                  </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);