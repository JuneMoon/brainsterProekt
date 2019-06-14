import React from "react";
import axios from "axios";

class CardsInput extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          games: [],
      }   
  }

  componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      
      axios.get('https://brainsterboxapi.herokuapp.com/games')
      .then(res => {
          this.setState({games: res.data});
      });
  }

  render() {
      return (
         <Container className="GameCard">
           <Row>
             <Col sm="4">
              {this.state.games.map(t => {
                return (
                  <Card id={games.id}>
                    <CardImg src={this.state.image} alt="game image" />
                      <CardBody>
                        <CardTitle>{this.state.title}</CardTitle>
                        <CardSubtitle>Категорија: {this.state.category}</CardSubtitle>
                        <CardText>Времетраење: {this.state.timeFrame}</CardText>
                      </CardBody>
                  </Card>
                )
              })}
             </Col>
           </Row>
          </Container>
        )
  }
}  
export default CardsInput;