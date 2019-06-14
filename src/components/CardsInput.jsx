import React from "react";
import GameCard from "components/GameCard";
import axios from "axios";

class CardsInput extends React.Component {
  constructor() {
      super();
      this.state = {
          games: games,
      }   
  }
  componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      
      axios.get('https://brainsterboxapi.herokuapp.com/games')
      .then(res => {
          console.log(res);
          this.setState({games: res.data});
      });
  }

  render() {
      return (
         <Container className="GameCard">
           <Row>
             <Col sm="4">
              {this.state.games.map(games => {
                return (
                  <Card  
                    id={games.id}>
                    img={require(`../assets/img/${games.id}.jpg`)}
                    title:{games.title}
                    category:{games.category}
                    timeframe:{games.timeFrame} />
                )
              })}
             </Col>
           </Row>
          </Container>
        )
  }
}  
export default CardsInput;