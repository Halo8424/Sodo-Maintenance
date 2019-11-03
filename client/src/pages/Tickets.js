import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

//--Tickets Extended Component
    class Tickets extends Component {
    //--State
        state={
            tickets: [],
            title: "",
            manager: "",
            note: ""
        };

    //--Mount Component
        componentDidMount(){
            this.loadTickets();
        }
    //--loadTickets
        loadTickets = () => {
            API.getTickets()
            .then(res =>
              this.setState({ tickets: res.data, title: "", manager: "", note: ""})
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
            if(this.state.title && this.state.manager){
                API.saveTicket({
                    title: this.state.title,
                    manager: this.state.manager,
                    note: this.state.note
                })
                .then(res => this.loadTickets())
                .catch(err => console.log(err));
            }
        };

    //--Render Ticket class component
        render(){
            return(
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                            <Jumbotron>
                                <h1>Create New Work Ticket</h1>
                            </Jumbotron>
                            <form>
                                <Input
                                value={this.state.title}
                                onchange={this.handleInputChange}
                                name="title"
                                placeholder="Title (broken Oven)"
                                />
                                <Input
                                value={this.state.manager}
                                onchange={this.handleInputChange}
                                name="manager"
                                placeholder="Manager Name (required)"
                                />
                                <TextArea
                                value={this.state.note}
                                onchange={this.handleInputChange}
                                name="note"
                                placeholder="Description"
                                />
                                <FormBtn
                                disabled={!(this.state.manager && this.state.title)}
                                onClick={this.handleFormSubmit}
                                >
                                    Submit Ticket
                                </FormBtn>
                            </form>
                        </Col>
                        <Col size="md-6 sm-12">
                            <Jumbotron>
                                <h1>Open Tickets</h1>
                            </Jumbotron>
                            {this.state.tickets.length ? (
                                <List>
                                    {this.state.tickets.map(ticket => (
                                        <ListItem key={ticket._id}>
                                           <Link to={"/tickets/" + ticket._id}>
                                           <strong>
                                                {ticket.title} Created by {ticket.manager}
                                            </strong>
                                           </Link>
                                           <DeleteBtn onClick={() => this.deleteTicket(ticket._id)} />
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <h3> No Results</h3>
                            )}
                        </Col>
                    </Row>
                </Container>
            );
        }
    } //--closing component tab

    export default Tickets;