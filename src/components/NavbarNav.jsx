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
        <Navbar color="transparent" light expand="md" className="navbar-main navbar-transparent navbar-light headroom justify-content-end">
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink> <i class="fa fa-stream fa-lg" aria-hidden="true"></i><span>Мени</span> </NavLink>
              </NavItem>
              <NavbarBrand className="align-items-center mr-lg-5" href="#" >
                <img
                  alt="..."
                  src={require("assets/img/brainlogo.png")}
                />
              </NavbarBrand>
              
              <NavItem>
                  <Button className="btn btn-warning" href="https://www.brainster.io/business">Обуки за компании</Button>
              </NavItem>
              <NavItem>
                <Button className="btn btn-darker text-warning" href="https://www.brainster.io/business">Вработи наши студенти</Button>
              </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarNav;