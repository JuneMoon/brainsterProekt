import React from 'react';
import {
    Container,
    Row
  } from "reactstrap";
//import GamePage from 'GamePage';

const GameSteps = (props) => {
    return (
        <Container>
            <Row>
                {props.steps.step}
                {props.steps.stepDescription}
            </Row>
        </Container>
    )
}
       
export default GameSteps;
