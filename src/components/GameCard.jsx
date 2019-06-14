// /*eslint-disable*/
import React from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
//reactstrap components
import {
  Container,
  Col,
  Card,
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle,
  //NavItem,  
} from "reactstrap";

const GameCard = (props) => {
  let games = [];
  for (var i=0; i < this.props.id - 1; i++) {
    games.push(<GameCard />)
  }

  
  return (
    <Container>
      <Col sm="4">
        <Card>
          <CardImg src={this.props.image} alt="game image" />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>Категорија: {this.props.category}</CardSubtitle>
            <CardText>Времетраење: {this.props.timeFrame}</CardText>
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
}

export default GameCard;