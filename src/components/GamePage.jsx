import React from "react";
import axios from "axios";
import NavButton from './NavButton';
import {
    Container,
    Row,
    Col,
    // Card,
    // CardImg,
    // CardText, 
    // CardBody,
    // CardTitle, 
    // CardSubtitle,
    //Badge,
    //NavItem,  
  } from "reactstrap";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      game: {},
      steps: []
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
        this.setState({game});
    });
  }
  render() {
    const steps = this.state.steps;
    console.log(this.state.game);
    console.log(steps);
    //console.log(this.state.steps);
    console.log('rerender');
    return (
        <>
        <NavButton />
        <Container>
            <Row>
                <Col>
                <h1>{this.state.game.title}</h1>
                </Col>
            </Row>
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
                   <Row>
                   {this.state.game.steps.map(game => {
                        game.steps.flatMap(step => {
                            return(
                                <p>{step}</p>
                            )
                        })
                    })
                    }    
                   </Row>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    {/* <p>{this.state.game.steps[7][1]}</p> */}
                {/* </Col>
            </Row>
            <Row>
                <Col> */}
                    {/* <p>{this.state.game.steps[7][2]}</p> */}
                {/* </Col>
            </Row> */} */}
        </Container>
        <Container>
             {/* //<Button onclick={(e) => this.props.push.('/')}>Back</Button> */}
        </Container>
        </>
       
    );
  }
}  
export default Cards;