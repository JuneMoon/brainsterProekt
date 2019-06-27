import React from "react";
import axios from "axios";
import GameCard from "components/GameCard.jsx";
import {  Container,  Row, Col, Card, CardColumns  } from "reactstrap";
//import { element } from "prop-types";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      games: []
    }   
  }
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    axios.get('https://brainsterboxapi.herokuapp.com/games')
    .then(res => {
      const games = res.data;
      this.setState({games});
    });
  }
  render() {
    return (
      <Container className="fliud">
          <Row >
            <Col lg="12">
              <CardColumns>
              
                {
                  this.state.games.map (game => {
                    return (
                      <Card className="card bg-light card-lift--hover shadow border-0  justify-content-left">
                        
                        <GameCard 
                          history={this.props.history} 
                          game={game}
                          id={game.id}
                          image={game.image}
                          
                          // {`require(assets/images/${game.id}.jpg)`}
                          title={game.title}
                          
                          category={game.category}
                          timeFrame={game.timeFrame}  
                      />  
                      </Card>
                    )
                  })
                }
               </CardColumns>
            </Col>
          </Row>
      </Container>
       
          
        
      
    );
  }
}  
export default Cards;