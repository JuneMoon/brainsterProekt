// import React from 'react';
// // import SvgIcon from '@material-ui/core/SvgIcon'

// function Cards(props) {

//    return (
//      <div className="Card col-md-4">
//      {/* Product image */}
//        <div className="col-md-12">
//          <img className="productPicture" src="https://www.queeky.com/static/img/73/73807/source.jpg
// https://www.queeky.com/static/img/73/73807/source.jpg
// " alt="Product"></img>
//        </div>
//      {/* Product details & Product Logo */}
//        <div className = 'col-md-12'>
//          <div className="col-md-10">
//            <h2>{props.title}</h2>
//            <p>Категорија: {props.category}</p>
//          </div>
//          <div className="col-md-2">
//            <img className="productLogo" src={props.image} alt="Product Logo"/>
//          </div>
//        </div>
//      {/* TimeFrame */}
//        <div className='col-md-12'>
//          <div className="col-md-2">
//            {/* <SvgIcon className="clock"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></SvgIcon> */}
//          </div>
//          <div className="col-md-10">
//            <h2>Времетраење</h2>
//            <p>{props.timeFrame}</p>
//          </div>
//        </div>
//      </div>
//    )}

// export default Cards;
// /*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
// import {
//   Button,
//   Card,
//   CardImg,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip
// } from "reactstrap";


const Cards = (props) => {
  const gamesList = this.props.data.map(() => {
    return (
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