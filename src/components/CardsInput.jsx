import React from "react";
import axios from "axios";
import GameCard from "components/GameCard.jsx";
import {
  Row,
  Col,
  Card
} from "reactstrap";
//import { element } from "prop-types";

class CardsInput extends React.Component {
  constructor() {
      super();
      this.state = {
          games: [],
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
           <Row>
             <Col sm="4">
              <Card>
                {this.state.games.map (games => {
                  return (
                    <GameCard 
                    games={games}
                    id={games.id}
                    image={games.image}
                    title={games.title}
                    category={games.category}
                    timeFrame={games.timeFrame}  
                    />
                  )
                })}
              </Card>
             </Col>
           </Row>
        )
  }
}  
export default CardsInput;