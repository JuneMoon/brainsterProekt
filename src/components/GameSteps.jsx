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
                {props.steps}
            </Row>
        </Container>
    )

}
       


export default GameSteps;
