import React from "react";
import axios from "axios";

import {
    Container,
    Row,
    Col 
  } from "reactstrap";

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
                <section className="section section-lg section-shaped pb-250 ">
                    <div className="shape shape-default" 
                    style={ backgroundImage: "url('https://cdn.pixabay.com/photo/2018/02/16/10/52/beverage-3157395_1280.jpg');"}
                    >
                        
                    </div>
                </section>
                <Container className="py-lg-md d-flex">
                    <div className="col px-0">
                    <Row>
                        <Col lg="12">
                            <h1>{this.state.game.title}</h1>
                        </Col>   
                    </Row>
                    </div>  
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
                    <div> 
                    <section>
                        <Row>
                            <Col sm="3">
                                <i class="fa fa-clock fa-lg" aria-hidden="true"></i><span>{this.state.game.timeFrame}</span>
                            </Col>
                            <Col sm="3">
                                <i class="fa fa-users fa-lg" aria-hidden="true"></i><span>{this.state.game.groupSize}</span>
                            </Col>
                            <Col sm="3">
                                <i class="fa fa-battery-half fa-lg" aria-hidden="true"></i><span>{this.state.game.level}</span>
                            </Col>
                            <Col sm="3">
                                <i class="fa fa-window-restore fa-lg" aria-hidden="true"></i><span>{this.state.game.materials}</span>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col>
                                <p>{this.state.game.description}</p>
                            </Col>
                        </Row>
                    </section>
                    
                    <section>
                        <Row>
                            {/* <Col> 
                                {this.state.steps.map( step => {
                                        return (
                                            <>
                                                <GameSteps
                                                {game.steps.step}
                                                {game.steps.stepDescription}
                                                    
                                                />
                                            </> 
                                        )
                                }) 
                                }
                                <Row>WHERE ARE MY STEPS??????</Row>
                            </Col> */}
                        </Row>
                    </section> 
                    </div> 
                </Container>
            </div>
            </main>

            <Footer />
        
        </>
       
    );
  }
}  
export default Cards;