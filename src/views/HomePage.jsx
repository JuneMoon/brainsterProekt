import React from "react";
// import axios from 'axios';


// core components

import Cards from "components/Cards.jsx";
import Footer from "components/Footer.jsx";

// index page sections
import Hero from "./IndexSections/Hero.jsx";
import DemoNavbar from "components/DemoNavbar.jsx";


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

      <Footer />
      </>  
    )
  }
}

export default Index;
