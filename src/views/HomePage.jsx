import React from "react";
// import axios from 'axios';

// reactstrap components
//import {Col} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
//import GameCard from "components/GameCard.jsx";
import Cards from "components/Cards.jsx";


// index page sections
import Hero from "./IndexSections/Hero.jsx";
// import Buttons from "./IndexSections/Buttons.jsx";
// import Inputs from "./IndexSections/Inputs.jsx";
// import CustomControls from "./IndexSections/CustomControls.jsx";
// import Menus from "./IndexSections/Menus.jsx";
// import Navbars from "./IndexSections/Navbars.jsx";
// import Tabs from "./IndexSections/Tabs.jsx";
// import Progress from "./IndexSections/Progress.jsx";
// import Pagination from "./IndexSections/Pagination.jsx";
// import Pills from "./IndexSections/Pills.jsx";
// import Labels from "./IndexSections/Labels.jsx";
// import Alerts from "./IndexSections/Alerts.jsx";
// import Typography from "./IndexSections/Typography.jsx";
// import Modals from "./IndexSections/Modals.jsx";
// import Datepicker from "./IndexSections/Datepicker.jsx";
// import TooltipPopover from "./IndexSections/TooltipPopover.jsx";
// import Carousel from "./IndexSections/Carousel.jsx";
// import Icons from "./IndexSections/Icons.jsx";
// import Login from "./IndexSections/Login.jsx";
// import Download from "./IndexSections/Download.jsx";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      games: '',
    }
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    console.log(this.props)
    return (
      <>
      <DemoNavbar />
        <main ref="main">
          <Hero />
        </main>
       <Cards history={this.props.history} />
      </>  
    )
  }
}

export default Index;