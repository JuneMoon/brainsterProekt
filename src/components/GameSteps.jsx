import React from 'react';
import axios from 'axios';
import GamePage from 'GamePage';

class GameSteps extends React.Component {
    constructor() {
        super();
        this.state = {
            steps: []
        }
    }

    componentDidMount() {
        axios.get('https://brainsterboxapi.herokuapp.com/games)
        .then(res => {
            const step = this.state.game.map(game => {
                game.steps.map(step => {
                    return(
                        <Row>{step}</Row>
                    )
                })
            })
        });
        console.log(steps);
        this.setState({steps});
    }
    render(){
        return (
            <Container>
                <Row>
                {step}
                </Row>
            </Container>
        )
    }


}

extends default GameSteps;
