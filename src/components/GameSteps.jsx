import React from 'react';
import {
    // Container,
    Row
  } from "reactstrap";
//import GamePage from 'GamePage';

const GameSteps = (props) => {
    return (
        <>
            <Row>
                <h3>{props.steps.step}</h3>
            
                <p>{props.steps.stepDescription}</p>
            </Row>
        </>
    )
}
       
export default GameSteps;
