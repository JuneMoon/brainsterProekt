/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


const Cards = () => {
  const gamesList = this.props.data.map(() => {
      return(
        <div className="Card col-md-4">
          <Link to={`/CardDetails/${this.props.data.id}`}></Link>
          <img src={this.props.data.image} alt="gameimage" />
          <h4>{this.props.data.title}</h4>
          <p>{this.props.data.category}</p>
          <p>{this.props.data.timeFrame}</p>
        </div>
      );
  }
}

export default Cards;
