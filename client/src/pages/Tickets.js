import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import UpdateBtn from "../components/UpdateBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { connect } from 'react-redux';
import './style.css';

//--Tickets Extended Component
class Tickets extends Component {
    //--State
    state = {
        tickets: [],
        title: "",
        manager: "Manager " + this.props.auth.user.name,
        note: ""
    };

    //--Mount Component
    componentDidMount() {
        this.loadTickets();
    }
    //--loadTickets
    loadTickets = () => {
        API.getTickets()
            .then(res =>
                this.setState({ tickets: res.data, title: "", manager: "Manager " + this.props.auth.user.name, note: "" })
            )
            .catch(err => console.log(err));
    };
    //--DeleteTicket
    deleteTicket = id => {
        API.deleteTicket(id)
            .then(res => this.loadTickets())
            .catch(err => console.log(err));
    };
    //--Handle Input Change
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    //--Handle the form submit event
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.manager) {
            API.saveTicket({
                title: this.state.title,
                manager: this.state.manager,
                note: this.state.note
            })
                .then(res => {
                    this.loadTickets()
                    console.log(res);
                    API.saveComment(res.data._id, {
                        author: this.props.auth.user.name,
                        body: "Ticket Created By"
                    })
                        .then(data => {
                            console.log(data)
                            API.saveComment(res.data._id, {
                                author: this.props.auth.user.name,
                                body: "Initial Note: " + res.data.note
                            })
                                .then(data => {
                                    console.log(data)
                                })
                                .catch(err => console.log(err))
                        })
                        .catch(err => console.log(err))


                })
                .catch(err => console.log(err));
        }
    };

    //--Render Ticket class component
    render() { 
        console.log(this.props.auth.user.name);

        return (
            <div className="container" style={{ marginTop: "4rem" }}>
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                            <Jumbotron>
                                <h1 className="display-4" style={{ "font-family": 'Anton', "font-size": "40px", "text-shadow": "3px 2px 3px black", "letter-spacing": "3px", marginTop: "40px" }}>Create New Ticket</h1>
                            </Jumbotron>
                            <form>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange} 
                                    name="title"
                                    placeholder="Title (broken Oven)"
                                    style={{backgroundColor: "white"}}
                                />
                                <Input
                                    value={"Manager " + this.props.auth.user.name}
                                    onChange={this.handleInputChange}
                                    name="manager"
                                    disabled="true"
                                />
                                <TextArea
                                    value={this.state.note}
                                    onChange={this.handleInputChange}
                                    name="note"
                                    placeholder="Description"
                                    style={{border: "1px solid black"}}
                                />
                                <FormBtn
                                    disabled={!(this.state.title)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit Ticket
                                </FormBtn>
                               </form>
                        </Col>
                        <Col size="md-6 sm-12">
                            <Jumbotron>
                                <h1 className="display-4" style={{ "font-family": 'Anton', "font-size": "40px", "text-shadow": "3px 2px 3px black", "letter-spacing": "3px", marginTop: "40px" }}>Open Tickets</h1>
                            </Jumbotron>

                            {this.state.tickets.length ? (
                                <List>
                                    {this.state.tickets.map(ticket => (
                                        <ListItem key={ticket._id}>
                                            <strong>
                                                {ticket.title} Created by {ticket.manager}
                                            </strong>
                                            <DeleteBtn onClick={() => this.deleteTicket(ticket._id)} />
                                            <UpdateBtn onClick={() => {

                                                API.saveComment(ticket._id, {
                                                    author: this.props.auth.user.name,
                                                    body: "Ticket Viewed By"
                                                })
                                                    .then(data => {
                                                        console.log(data)
                                                        window.open("/tickets/" + ticket._id, "_self")
                                                    })
                                                    .catch(err => console.log(err))
                                               


                                            }
                                            } />

                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                    <h3> No Results</h3>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps)(Tickets);
