import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

//--Detail class component
    class Detail extends Component{
        state={
            ticket: {}
        };
    //--Mount component
        componentDidMount(){
            API.getTicket(this.props.match.params.id)
            .then(res => this.setState({ ticket: res.data}))
            .catch(err => console.log(err));
        }

        render() {
            return(
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
                        <article>
                            <h1>Manager Note</h1>
                            <p>
                                {this.state.ticket.note}
                            </p>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/"><- Back to Open Tickets</Link>
                    </Col>
                </Row>
            </Container>
            );       
        }
    } //-closing class tag

    export default Detail;