// /*eslint-disable*/
import React from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
//reactstrap components
import {
  // Container,
  // Row,
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
  console.log(props.game)
  return (
          <Card>
            {/* <CardImg src={props.image} alt="game image" /> */}
            <CardBody>
              <CardTitle>{props.title}</CardTitle>
              <CardSubtitle>Категорија: {props.category}</CardSubtitle>
              <CardText>Времетраење: {props.timeFrame}</CardText>
            </CardBody>
          </Card>
        
      
  );
}

export default GameCard;