import React from "react";
import axios from "axios";
import NavButton from './NavButton';
import GameSteps from './GameSteps';
import {
    Container,
    Row,
    Col 
  } from "reactstrap";

//import { element } from "prop-types";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      game: {},
      steps: [],
    }   
  }
  componentDidMount() {
    axios.get('https://brainsterboxapi.herokuapp.com/games')
    .then(res => {
        const pathname = this.props.location.pathname;
        const arrayPath = pathname.split('/');
        const id = arrayPath[2];
        const games = res.data;
        const game = games.find(o => {
            return o.id === id
        })
        const steps = game.steps;
        console.log(steps);
        this.setState({game});
    });
    }

  render() {
    //console.log(this.state.game);
    // console.log('rerender');
    return (
        <>
        <NavButton />
        <Container>
            <Row>
                <Col>
                <h1>{this.state.game.title}</h1>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col sm="3">
                    <i></i><span>{this.state.game.timeFrame}</span>
                </Col>
                <Col sm="3">
                    <i></i><span>{this.state.game.groupSize}</span>
                </Col>
                <Col sm="3">
                    <i></i><span>{this.state.game.level}</span>
                </Col>
                <Col sm="3">
                <i></i><span>{this.state.game.materials}</span>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <p>{this.state.game.description}</p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col> 
                    {this.state.steps.map( (step, stepDescription) => {
                            return (
                                <GameSteps step={step} stepDescription={stepDescription} /> 
                            )
                    }) 
                    }
                    <Row>WHERE ARE MY STEPS??????</Row>
                </Col>
            </Row>
        </Container>      
        <Container>
             {/* <Button onclick={(e) => this.props.push.('/')}>Back</Button> */}
        </Container>
        </>
       
    );
  }
}  
export default Cards;