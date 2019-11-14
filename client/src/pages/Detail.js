import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form/index";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/authActions';
var moment = require('moment');

//--Detail class component
class Detail extends Component {
    state = {
        ticket: {},
        comment: "",
        userId: ""

    };
    //--Mount component
    componentDidMount() {
        this.getTicket();
    }

    getTicket() {
        API.getTicket(this.props.match.params.id)
            .then(res => {
                console.log(res);

                this.setState({ ticket: res.data })
            })
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.comment);
        const { user } = this.props.auth;
        this.setState({
            userId: user.id
        })
        let dataComment = {
            author: user.name,
            body: this.state.comment
        }

        API.saveComment(this.state.ticket._id, dataComment)
            .then(data => {
                console.log(data)
                this.getTicket()
                this.setState({
                    comment: ""
                
                })
            })
            .catch(err => console.log(err))





    }



    render() {
        // const { user } = this.props.auth;
        // console.log(this.state.ticket._id);

        return (
            <div className="container" style={{ marginTop: "4rem" }}>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <h1>
                                    {this.state.ticket.title} Created by {this.state.ticket.manager}
                                </h1>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10 md-offset-1">
                            <article style={{ background: "white", "margin-left": "160px"}}>
                                <div>
                                    <form>
                                        <Input
                                            name="comment"
                                            placeholder="Add Comment"
                                            value={this.state.comment}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormBtn
                                            disabled={!(this.state.comment)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Submit
                                         </FormBtn>
                                        <div style={{ clear: "both" }}></div>
                                    </form>
                                </div>


                                <h4>Notes</h4>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Comment</th>
                                            <th>User</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.ticket.comments ? this.state.ticket.comments.map(item => (

                                            <tr key={item._id}>

                                                <td>{moment(item.date).format("MM-DD-YYYY h:mm a")}</td>
                                                <td>{item.body}</td>
                                                <td>{item.author}</td>
                                            </tr>
                                        )) : ''}

                                    </tbody>
                                </table>

                            </article>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-2">
                            <Link to="/">Back to Open Tickets</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
} //-closing class tag

Detail.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { logoutUser })(Detail);