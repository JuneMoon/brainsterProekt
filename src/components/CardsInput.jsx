import React from "react";
import axios from "axios";
import GameCard from "components/GameCard.jsx";
import {
  Container,
  // Row,
  // Col,
  // Card
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
      // const { games, counter, customer,  } = this.state;
      return (
              <Container
                style={{  
                  display: 'flex',
                  flexWrap: 'wrap',
                  padding: '20px'
                }}
              >
                {this.state.games.map (game => {
                  // na sekoi 3
                  return (
                   
                      <GameCard 
                        game={game}
                        id={game.id}
                        image={game.image}
                        title={game.title}
                        category={game.category}
                        timeFrame={game.timeFrame}  
                    />
                      
                  )
                })}
              </Container>
        )
  }
}  
export default CardsInput;