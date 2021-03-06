import React from "react";
import axios from "axios";

import {
    Container,
    Row,
    Col 
  } from "reactstrap";

//import "..assets/css/gamebox.css";

import NavbarNav from 'components/NavbarNav';
import Footer from 'components/Footer.jsx';




class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      game: {},
      steps: [],
    }   
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
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
         <NavbarNav />
            <main ref="main">
            <div className="position-relative">
                {/* shape Hero */}
                <section className="section section-xl section-shaped pb-250 ">
                    <div className="shape shape-default pb-350" 
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/1498964/pexels-photo-1498964.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w')"}}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                        >
                        <polygon
                            className="fill-white"
                            points="2560 0 2560 100 0 100"
                        />
                        </svg>
                    </div>
                    </section>
                    {/* 1st Hero Variation */}
                </div>
                <Container >
                    <Row>
                        <Col >
                            <h1 className="pb-4">{this.state.game.title}</h1>
                        </Col>   
                    </Row>
                    <Row>
                        <Col className="bg-transparent"> </Col>
                    </Row>
                    <Row>
                        <Col className="bg-transparent"> </Col>
                    </Row>
                    <Row className="bg-light rounded p-2">
                                <Col>
                                    <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i> <span>Времетраење: <br/>{this.state.game.timeFrame}</span>
                                </Col>
                                <Col >
                                    <i class="fa fa-users fa-lg" aria-hidden="true"></i> <span>Број на играчи: <br/>{this.state.game.groupSize}</span>
                                </Col>
                                <Col >
                                    <i class="fa fa-battery-half fa-lg" aria-hidden="true"></i> <span>Тежина: <br/>{this.state.game.level}</span>
                                </Col>
                                <Col>
                                    <i class="fa fa-window-restore fa-lg" aria-hidden="true"></i> <span>Материјали: <br/> {this.state.game.materials}</span>
                                </Col>
                    </Row>
                    <Row>
                        <Col className="bg-transparent"> </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className="bg-transparent"> </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{this.state.game.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="bg-transparent"> </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className="bg-transparent"> </Col>
                    </Row>
                   
                
                    <Row>
                        <Col> 
                            {/* {this.state.steps.map( step => {
                                    return (
                                        <>
                                            <GameSteps
                                            {game.steps.step}
                                            {game.steps.stepDescription}
                                                
                                            />
                                        </> 
                                    )
                            }) 
                            } */}
                            <Row>WHERE ARE MY STEPS??????</Row>
                        </Col> 
                    </Row>
                </Container>
            
            </main>

            <Footer />
        
        </>
       
    );
  }
}  
export default Cards;