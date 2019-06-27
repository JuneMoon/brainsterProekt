import React from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
//reactstrap components
import {
  
  Row,
  Col,
  Card,
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle,
  
    
} from "reactstrap";


const GameCard = (props) => {
  return (
            <Card 
              onClick={(e) => {
                console.log('click', props.history);
                props.history.push(`/game-page/${props.game.id}`)
              } }
              >
              <CardImg top src={require(`../assets/images/${props.id}.jpg`)}
              
              alt="Card image cap"/>
                <CardBody>
                  <div>
                    <Row>
                      <Col sm="8">
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>Категорија: {props.category}</CardSubtitle>
                      </Col>
                      <Col sm="4">
                        <img className="img-thumbnail rounded-circle" src={props.image} alt="game-icon" /> 
                      </Col> 
                    </Row>
                  </div> 
                  <div>
                    <Row>
                      <Col>
                        <CardText><span><i class="fa fa-clock-o fa-lg" aria-hidden="true"></i></span> Времетраење: {props.timeFrame}</CardText>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
              
  );
}

export default GameCard;