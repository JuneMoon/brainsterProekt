// /*eslint-disable*/
import React from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
//reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle,
  Badge,
  //NavItem,  
} from "reactstrap";


const GameCard = (props) => {
  return (
    <Card 
      onClick={(e) => {
        console.log('click', props.history);
        props.history.push(`/game-page/${props.game.id}`)
      } }
    >
     <CardImg src={`../assets/images/${props.id}.jpg`} alt="game image" />
      <CardBody>
        <Container>
          <Row>
            <Col sm="8">
              <CardTitle>{props.title}</CardTitle>
              <CardSubtitle>Категорија: {props.category}</CardSubtitle>
            </Col>
            <Col sm="4">
              <img src={props.image} alt="game-icon" />
            </Col>
           </Row>
        </Container> 
        <Container>
          <Row>
            <Col>
            <Badge><i class="far fa-clock"></i></Badge><CardText>Времетраење: {props.timeFrame}</CardText>
            </Col>
          </Row>
        </Container>
      </CardBody>
    </Card> 
  );
}

export default GameCard;