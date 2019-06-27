import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
  } from 'reactstrap';

class NavbarNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="transparent" light expand="md" className="navbar-main navbar-transparent navbar-light headroom align-items-stretch">
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            </Collapse>
            {/* <NavItem>
               <i class="fa fa-stream fa-lg" aria-hidden="true"></i><span>Мени</span> 
              </NavItem> */}
              <NavbarBrand className="mr-5 pr-5" href="/" >
                <img
                  alt="..."
                  src={require("assets/img/brainlogo.png")}
                />
              </NavbarBrand>
              
              <Nav classname="nav justify-content-end">
              <NavItem>
                  <Button className="btn btn-warning btn-md mr-1" href="https://www.brainster.io/business">Обуки за компании</Button>
              </NavItem>
              <NavItem>
                <Button className="btn btn-darker text-warning btn-md mr-1" href="https://www.brainster.io/business">Вработи наши студенти</Button>
              </NavItem>
              
            </Nav>
            
        </Navbar>
      </div>
    );
  }
}

export default NavbarNav;