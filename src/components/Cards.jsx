import React from "react";
import axios from "axios";
import GameCard from "components/GameCard.jsx";
import { Container } from "reactstrap";
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
      <Container
        style={{  
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px'
        }}
      >
        {
          this.state.games.map (game => {
            return (
                <GameCard 
                  history={this.props.history} 
                  game={game}
                  id={game.id}
                  img={game.image}
                  title={game.title}
                  category={game.category}
                  timeFrame={game.timeFrame}  
              />
            )
          })
        }
      </Container>
    );
  }
}  
export default Cards;